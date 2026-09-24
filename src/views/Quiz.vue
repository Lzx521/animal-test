<template>
  <div class="quiz" v-if="store.currentQuestion">
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: store.progress + '%' }"></div>
    </div>
    <p class="progress-text">{{ store.currentIndex + 1 }} / {{ store.total }}</p>

    <!-- key 强制整卡重建，清掉微信/WebView 粘住的 hover/active -->
    <div class="question-card" :key="cardKey">
      <h2 :class="{ 'has-bonus': store.currentQuestion.isBonus }">{{ store.currentQuestion.text }}</h2>
      <p v-if="store.currentQuestion.isBonus" class="bonus-hint">彩蛋题 · 选什么都不计分</p>

      <div class="options">
        <button
          v-for="(opt, idx) in formattedOptions"
          :key="`${cardKey}-opt-${idx}`"
          type="button"
          class="option-btn"
          :disabled="isSelecting"
          :class="{ selected: isOptionSelected(idx) }"
          @click="onSelect(idx)"
        >
          <span class="radio" aria-hidden="true"></span>
          <span class="option-label">{{ optionLetters[idx] }}.</span>
          <span class="option-text">
            <span class="option-main">{{ opt.main }}</span>
            <span v-if="opt.detail" class="option-detail">{{ opt.detail }}</span>
          </span>
        </button>
      </div>

      <div class="nav-row">
        <button
          type="button"
          class="btn-prev"
          :disabled="!store.canGoPrev || isSelecting"
          @click="onPrev"
        >
          ← 上一题
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quizStore'

const optionLetters = ['A', 'B', 'C', 'D', 'E']
const router = useRouter()
const store = useQuizStore()
const isSelecting = ref(false)
/** 仅点选瞬间闪一下；切到下一题必须为 null */
const flashIdx = ref(null)
/** 只有点「上一题」才回显已答选项；向前切题绝不回显 */
const revealStored = ref(false)
/** 每次切题递增，逼 WebView 丢掉粘滞 hover */
const remountToken = ref(0)

const cardKey = computed(
  () => `${store.currentQuestion?.id ?? 'q'}-${store.currentIndex}-${remountToken.value}`
)

onMounted(() => {
  if (!store.quizQuestions.length) {
    store.reset()
  }
  // 从结果页返回时解除完成锁，避免第 31 题点选后跳不回结果页
  store.reopenQuiz()
  revealStored.value = false
  flashIdx.value = null
})

function isOptionSelected(idx) {
  if (flashIdx.value === idx) return true
  if (revealStored.value && store.currentAnswer === idx) return true
  return false
}

function bumpCard() {
  remountToken.value += 1
}

function onPrev() {
  if (isSelecting.value) return
  store.goPrev()
  flashIdx.value = null
  revealStored.value = true
  bumpCard()
}

function splitOptionText(raw = '') {
  const text = String(raw).trim().replace(/["“”']/g, '')
  if (!text) return { main: '', detail: '' }
  if (text.length <= 36) return { main: text, detail: '' }

  const phraseList = text
    .replace(/[—\-]{2,}/g, '，')
    .split(/[，。！？；]/)
    .map((s) => s.trim())
    .filter(Boolean)

  const partA = (phraseList[0] || '').slice(0, 16)
  const partB = (phraseList[1] || '').slice(0, 14)
  const partC = (phraseList[2] || '').slice(0, 12)

  const main = partA || text.slice(0, 16)
  const detail = [partB, partC].filter(Boolean).join('，')
  return { main, detail }
}

const formattedOptions = computed(() =>
  (store.currentQuestion?.options || []).map((opt) => {
    const split = splitOptionText(opt.text)
    return {
      ...opt,
      main: split.main || opt.text,
      detail: split.detail
    }
  })
)

async function onSelect(idx) {
  if (isSelecting.value) return
  isSelecting.value = true
  revealStored.value = false
  flashIdx.value = idx

  // 先让用户看见点中，再清空并切题
  await new Promise((r) => window.setTimeout(r, 120))

  flashIdx.value = null
  const finished = store.selectOption(idx)

  // 下一题：不回显任何选中；整卡重建清掉微信粘滞高亮
  revealStored.value = false
  bumpCard()
  await nextTick()

  isSelecting.value = false
  if (finished) {
    router.push('/result')
  }
}
</script>

<style scoped>
.quiz {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}

.progress-bar {
  width: 100%;
  max-width: 500px;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-top: 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #e94560;
  border-radius: 3px;
  transition: width 0.4s ease;
}

.progress-text {
  font-size: 14px;
  color: #888;
  margin: 8px 0 20px 0;
}

.question-card {
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

h2 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

h2.has-bonus {
  margin-bottom: 8px;
}

.bonus-hint {
  margin: 0 0 16px;
  font-size: 13px;
  font-weight: 600;
  color: #c73652;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #f8f9fa;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 14px 18px;
  font-size: 15px;
  color: #333;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  text-align: left;
  line-height: 1.5;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  outline: none;
}

/* 只在真鼠标设备上启用 hover，避免微信点完后 hover 粘在下一题同位置按钮上 */
@media (hover: hover) and (pointer: fine) {
  .option-btn:hover {
    border-color: #e94560;
    background: #fef0f2;
  }
}

.option-btn:focus {
  outline: none;
}

.option-btn.selected {
  border-color: #e94560;
  background: #fef0f2;
}

.option-btn:disabled {
  cursor: default;
}

.radio {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background: #fff;
  position: relative;
}

.option-btn.selected .radio {
  border-color: #e94560;
}

.option-btn.selected .radio::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e94560;
}

.option-label {
  flex-shrink: 0;
  font-weight: 700;
  color: #e94560;
  min-width: 1.4em;
}

.option-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.option-main {
  font-weight: 600;
  color: #2d2d44;
}

.option-detail {
  font-size: 13px;
  color: #666;
}

.nav-row {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}

.btn-prev {
  background: transparent;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 0;
  -webkit-tap-highlight-color: transparent;
}

.btn-prev:disabled {
  color: #ccc;
  cursor: not-allowed;
}

@media (hover: hover) and (pointer: fine) {
  .btn-prev:not(:disabled):hover {
    color: #e94560;
  }
}

@media (max-width: 420px) {
  .quiz {
    padding: 12px;
  }

  .question-card {
    padding: 24px 16px;
    border-radius: 16px;
  }

  h2 {
    font-size: 17px;
  }

  .option-btn {
    padding: 12px 14px;
    font-size: 14px;
  }

  .option-detail {
    font-size: 12px;
  }
}
</style>
