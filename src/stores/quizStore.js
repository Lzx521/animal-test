import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { bonusQuestions, buildQuizFlow, matchResult, orderedQuestions, scoreQuiz } from '../data/questions'

const STORAGE_KEY = 'animal-test-quiz-v1'

function emptyScores() {
  return {
    procrastination: 0,
    attention: 0,
    rebuttal: 0,
    drama: 0,
    creativity: 0
  }
}

function findQuestion(id) {
  return (
    orderedQuestions.find((q) => q.id === id) ||
    bonusQuestions.find((q) => q.id === id) ||
    null
  )
}

function loadSaved() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function saveState(payload) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // ignore quota / private mode
  }
}

function clearSaved() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

export const useQuizStore = defineStore('quiz', () => {
  const saved = loadSaved()

  const currentIndex = ref(saved?.currentIndex ?? 0)
  const scores = ref(saved?.scores ? { ...emptyScores(), ...saved.scores } : emptyScores())
  const isFinished = ref(!!saved?.isFinished)
  const quizQuestions = ref(
    Array.isArray(saved?.questionIds) && saved.questionIds.length
      ? saved.questionIds
          .map((id) => findQuestion(id))
          .filter(Boolean)
      : []
  )
  const answers = ref(
    Array.isArray(saved?.answers) ? saved.answers : []
  )
  const result = ref(saved?.result ?? null)

  // 刷新后若题目列表丢了但未完成，重新挂上固定顺序
  if (!quizQuestions.value.length && !isFinished.value) {
    // 保持空，等 start/reset；若已完成则只依赖 result
  }
  if (isFinished.value && !result.value && saved?.scores) {
    result.value = matchResult(saved.scores)
  }

  const currentQuestion = computed(() => quizQuestions.value[currentIndex.value] || null)
  const total = computed(() => quizQuestions.value.length || orderedQuestions.length)
  const progress = computed(() => {
    if (!total.value) return 0
    return Math.round(((currentIndex.value + 1) / total.value) * 100)
  })
  const currentAnswer = computed(() => answers.value[currentIndex.value] ?? null)
  const canGoPrev = computed(() => currentIndex.value > 0)

  function persist() {
    saveState({
      currentIndex: currentIndex.value,
      scores: scores.value,
      isFinished: isFinished.value,
      questionIds: quizQuestions.value.map((q) => q.id),
      answers: answers.value,
      result: result.value
    })
  }

  function answerMap() {
    const map = {}
    quizQuestions.value.forEach((q, i) => {
      const optIdx = answers.value[i]
      if (optIdx == null || !q) return
      map[q.id] = optIdx
    })
    return map
  }

  function recomputeScores() {
    const { scores: next } = scoreQuiz(answerMap())
    scores.value = next
  }

  function finalizeResult() {
    const scored = scoreQuiz(answerMap())
    scores.value = scored.scores
    result.value = { ...matchResult(scored.scores), egg: scored.egg || null }
  }

  /**
   * 从结果页返回答题时调用：解除「已完成」锁，允许改答案再出结果
   */
  function reopenQuiz() {
    if (!isFinished.value) return
    isFinished.value = false
    persist()
  }

  /**
   * @returns {boolean} 是否已答完全部题目
   */
  function selectOption(optionIndex) {
    if (!currentQuestion.value) return false

    // 结果页返回后 isFinished 仍为 true，必须先解锁，否则最后一题点了没反应
    if (isFinished.value) {
      isFinished.value = false
    }

    answers.value[currentIndex.value] = optionIndex
    recomputeScores()

    if (currentIndex.value < quizQuestions.value.length - 1) {
      currentIndex.value++
      persist()
      return false
    }

    finalizeResult()
    isFinished.value = true
    persist()
    return true
  }

  function goPrev() {
    if (currentIndex.value <= 0) return
    if (isFinished.value) {
      isFinished.value = false
    }
    currentIndex.value--
    persist()
  }

  function reset() {
    quizQuestions.value = buildQuizFlow()
    answers.value = quizQuestions.value.map(() => null)
    currentIndex.value = 0
    scores.value = emptyScores()
    isFinished.value = false
    result.value = null
    persist()
  }

  // 进入结果页时若内存空但有缓存，可再拉一次
  function restoreIfNeeded() {
    if (isFinished.value && result.value) return true
    const again = loadSaved()
    if (again?.isFinished && again.result) {
      isFinished.value = true
      result.value = again.result
      scores.value = { ...emptyScores(), ...again.scores }
      answers.value = again.answers || []
      return true
    }
    return false
  }

  watch(
    [isFinished, result],
    () => {
      if (isFinished.value) persist()
    },
    { deep: true }
  )

  return {
    currentIndex,
    scores,
    isFinished,
    quizQuestions,
    answers,
    currentQuestion,
    total,
    progress,
    result,
    currentAnswer,
    canGoPrev,
    selectOption,
    goPrev,
    reopenQuiz,
    reset,
    finalizeResult,
    restoreIfNeeded,
    clearSaved
  }
})
