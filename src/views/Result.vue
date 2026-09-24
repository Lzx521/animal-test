<template>
  <div v-if="toastText" class="toast" role="status">{{ toastText }}</div>
  <div class="result" v-if="store.isFinished && result.name">
    <div class="result-card" ref="resultCard">
      <div class="animal-hero">
        <img
          v-if="heroImage"
          class="sibuxiang-art"
          :src="heroImage"
          :alt="result.name || '测试结果'"
        />
        <div v-else class="animal-emoji">{{ result.emoji }}</div>
      </div>
      <h1>{{ result.name }}</h1>

      <div class="radar-wrapper">
        <canvas id="radarCanvas" width="240" height="240"></canvas>
      </div>

      <div v-if="storySegments.length" class="story-block">
        <p>
          <template v-for="(seg, i) in storySegments" :key="'seg-' + i">
            <strong v-if="seg.bold" class="story-em">{{ seg.text }}</strong>
            <template v-else>{{ seg.text }}</template>
          </template>
        </p>
      </div>

      <div class="support-cta" data-html2canvas-ignore>
        <button type="button" class="soft-btn gold" @click="showTip = !showTip">
          <span>{{ showTip ? '收起赞赏码' : rewardTip }}</span>
          <span class="chev" aria-hidden="true">{{ showTip ? '▴' : '▾' }}</span>
        </button>
        <div v-if="showTip" class="tip-panel">
          <p class="tip-text">扫码赞赏，感谢支持</p>
          <img class="qr-code" src="/assets/reward-qr.png?v=2" alt="reward qrcode" />
        </div>
      </div>

      <div class="action-row" data-html2canvas-ignore>
        <button type="button" class="btn-share" @click="copyShare">📣 复制去发群</button>
        <button type="button" class="btn-save" @click="saveCard">📤 保存图片</button>
      </div>

      <div class="footer-links" data-html2canvas-ignore>
        <button type="button" class="text-link muted" @click="retake">
          重新测试
        </button>
      </div>
      <p class="compliance-note" data-html2canvas-ignore>仅供娱乐参考，不构成专业心理评估或职业建议。</p>
    </div>
  </div>
  <div v-else class="result result-empty">
    <div class="result-card">
      <p class="empty-text">{{ shareLoadError || '还没有测试结果' }}</p>
      <p v-if="shareLoadError" class="empty-hint">请让朋友重新复制完整链接，或自己重新测一次。</p>
      <button class="btn-share full" @click="goHome">回首页开始测试</button>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuizStore } from '../stores/quizStore'
import {
  buildPersonalityTags,
  buildShareText,
  getRewardTip,
  MAX_DIMENSION_SCORE
} from '../data/questions'
import { appRoot, homeShareUrl, setShareMeta } from '../utils/shareMeta'
import html2canvas from 'html2canvas'

const route = useRoute()
const router = useRouter()
const store = useQuizStore()
const result = computed(() => store.result || {})
const resultCard = ref(null)
const toastText = ref('')
let toastTimer = null
const shareLoadError = ref('')
const showTip = ref(false)
const heroImage = computed(() => {
  if (result.value.image) return result.value.image
  if (result.value.isTie) return '/assets/sibuxiang.svg'
  return ''
})

const tags = computed(() =>
  buildPersonalityTags(store.scores, result.value?.fixedTag)
)

const rewardTip = computed(() => getRewardTip(result.value))

function cleanPhrase(text = '') {
  return String(text)
    .replace(/[「」""“”]/g, '')
    .replace(/[。！？]+$/g, '')
    .trim()
}

/** 揉成一整段；标签写进正文，加粗人设概括（已去掉结尾建议/剧透） */
const storySegments = computed(() => {
  const r = result.value || {}
  const subtitle = cleanPhrase(r.subtitle)
  const colleague = cleanPhrase(r.colleagueView)
  const suited = cleanPhrase(r.suitedFor)
  const avoid = cleanPhrase(r.avoidMoments)
  const quote = cleanPhrase(r.quote)
  const tagList = tags.value.map((t) => cleanPhrase(t.text)).filter(Boolean)

  const segments = []
  const push = (text, bold = false) => {
    if (!text) return
    segments.push({ text, bold })
  }
  const pushSep = () => {
    if (segments.length) push('。')
  }

  if (subtitle) {
    push('你是那种「')
    push(subtitle, true)
    push('」的人')
  }
  if (tagList.length) {
    pushSep()
    push('别人常拿')
    push(tagList.map((t) => `「${t}」`).join('、'))
    push('这种词形容你')
  }
  if (colleague) {
    pushSep()
    push(`同事眼里，${colleague}`)
  }
  if (suited || avoid) {
    pushSep()
    if (suited && avoid) {
      push(`你的高光位在「${suited}」，翻车高发区则是「${avoid}」`)
    } else if (suited) {
      push(`你的高光位在「${suited}」`)
    } else {
      push(`你要小心「${avoid}」这类场合`)
    }
  }
  if (quote) {
    pushSep()
    push(quote)
  }
  if (segments.length) push('。')
  return segments
})

function drawRadar() {
  const canvas = document.getElementById('radarCanvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const w = 240
  const h = 240
  const cx = w / 2
  const cy = h / 2
  const r = 90

  ctx.clearRect(0, 0, w, h)

  const labels = ['摸鱼', '显眼', '怼人', '内心戏', '脑洞']
  const values = [
    store.scores.procrastination,
    store.scores.attention,
    store.scores.rebuttal,
    store.scores.drama,
    store.scores.creativity
  ].map((score) => Math.max(0, Math.min(1, (score || 0) / MAX_DIMENSION_SCORE)))

  for (let ring = 1; ring <= 3; ring++) {
    ctx.beginPath()
    const radius = (r / 3) * ring
    for (let i = 0; i < 5; i++) {
      const angle = Math.PI / 2 - (i / 5) * Math.PI * 2
      const x = cx + radius * Math.cos(angle)
      const y = cy - radius * Math.sin(angle)
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - (i / 5) * Math.PI * 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + r * Math.cos(angle), cy - r * Math.sin(angle))
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  ctx.beginPath()
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - (i / 5) * Math.PI * 2
    const radius = r * values[i]
    const x = cx + radius * Math.cos(angle)
    const y = cy - radius * Math.sin(angle)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = 'rgba(233, 69, 96, 0.2)'
  ctx.fill()
  ctx.strokeStyle = '#e94560'
  ctx.lineWidth = 2.5
  ctx.stroke()

  ctx.font = '12px sans-serif'
  ctx.fillStyle = '#555'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - (i / 5) * Math.PI * 2
    const labelR = r + 22
    const x = cx + labelR * Math.cos(angle)
    const y = cy - labelR * Math.sin(angle)
    ctx.fillText(labels[i], x, y)
  }
}

async function copyPlain(text, toast) {
  if (!text) return
  try {
    await navigator.clipboard.writeText(text)
    showToast(toast)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      showToast(toast)
    } catch {
      alert('复制失败，请手动复制：\n\n' + text)
      document.body.removeChild(ta)
      return
    }
    document.body.removeChild(ta)
  }
}

function syncShareMeta() {
  if (!result.value?.name) return
  const title = `我是「${result.value.name}」${result.value.emoji || ''}｜敢不敢来测`
  const desc = (result.value.subtitle || '3 分钟测出你的职场人设').trim()
  setShareMeta({ title, description: desc })

  // 地址栏改成首页，微信右上角「···」转发也落到开始测试
  const homeHash = `${appRoot()}/#/`
  if (window.location.href !== homeHash) {
    window.history.replaceState(window.history.state, '', homeHash)
  }
}

async function copyShare() {
  await copyPlain(buildShareText(result.value, homeShareUrl()), '已复制，去群里贴一下')
}

function showToast(message) {
  toastText.value = message
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastText.value = ''
  }, 1700)
}

async function saveCard() {
  const el = resultCard.value
  if (!el) return
  try {
    const canvas = await html2canvas(el, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: true
    })
    const link = document.createElement('a')
    link.download = `职场人设_${result.value.name}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (err) {
    console.error('生成海报失败:', err)
    alert('生成失败，请截图分享 😄')
  }
}

function retake() {
  showTip.value = false
  sessionStorage.removeItem('animal-test-just-finished')
  store.reset()
  router.push('/')
}

function goHome() {
  router.push('/')
}

/** 旧版结果分享链接：直接去首页开测 */
function redirectShareLinkToHome() {
  const rawShare = route.query.share
  const token = Array.isArray(rawShare) ? rawShare[0] : rawShare
  if (!token) return false
  router.replace('/')
  return true
}

onMounted(async () => {
  if (redirectShareLinkToHome()) return
  store.restoreIfNeeded()
  if (store.isFinished && result.value?.name) {
    sessionStorage.setItem('animal-test-just-finished', '1')
    syncShareMeta()
  }
  await nextTick()
  if (store.isFinished) drawRadar()
})

watch(
  () => store.isFinished,
  async (done) => {
    if (done) {
      sessionStorage.setItem('animal-test-just-finished', '1')
      syncShareMeta()
      await nextTick()
      drawRadar()
    }
  }
)

watch(
  () => result.value?.name,
  (name) => {
    if (name && store.isFinished) syncShareMeta()
  }
)
</script>

<style scoped>
.result {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.toast {
  position: fixed;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background: rgba(26, 26, 46, 0.9);
  color: #fff;
  font-size: 13px;
  line-height: 1;
  padding: 10px 14px;
  border-radius: 999px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
}

.result-empty .empty-text {
  font-size: 16px;
  color: #666;
  margin: 12px 0 10px;
}

.result-empty .empty-hint {
  margin: 0 0 18px;
  color: #999;
  font-size: 13px;
  line-height: 1.6;
}

.result-card {
  background: white;
  border-radius: 24px;
  padding: 36px 28px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.share-warning {
  width: 100%;
  max-width: 420px;
  margin: 0 0 10px 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: #fff5f5;
  border: 1px solid #ffd5d5;
  color: #c73652;
  font-size: 13px;
  text-align: center;
}

.share-banner {
  width: 100%;
  max-width: 420px;
  margin: 0 0 10px 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: #f0f4ff;
  border: 1px solid #d9e2ff;
  color: #3b4a8a;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
}

.animal-hero {
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
}

.sibuxiang-art {
  width: 152px;
  height: 152px;
  display: block;
  filter: drop-shadow(0 8px 16px rgba(26, 26, 46, 0.1));
}

.animal-emoji {
  font-size: 72px;
  margin-bottom: 4px;
  line-height: 1.1;
}

h1 {
  font-size: 26px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px 0;
  line-height: 1.25;
  overflow-wrap: anywhere;
}

.subtitle {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: #e94560;
  background: #fce8eb;
  padding: 4px 14px;
  border-radius: 999px;
  margin: 0 0 12px 0;
  line-height: 1.45;
}

.radar-wrapper {
  display: flex;
  justify-content: center;
  margin: 8px 0 16px 0;
}

#radarCanvas {
  width: 200px;
  height: 200px;
}

.story-block {
  text-align: left;
  background: #f8f9fb;
  border-radius: 14px;
  padding: 14px 16px;
  margin: 0 0 12px 0;
}

.story-block p {
  margin: 0;
  font-size: 14px;
  color: #3f3f52;
  line-height: 1.75;
  text-align: justify;
}

.story-em {
  font-weight: 700;
  color: #e94560;
}

.action-row {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
}

.btn-share {
  flex: 1;
  background: #e94560;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 13px 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-share.full {
  width: 100%;
  flex: none;
  font-size: 16px;
  padding: 14px 24px;
}

.btn-share:hover {
  background: #c73652;
}

.btn-save {
  flex: 1;
  background: #fff;
  color: #e94560;
  border: 1.5px solid #e94560;
  border-radius: 50px;
  padding: 12px 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-save:hover {
  background: #fef0f2;
}

.support-cta {
  margin: 0 0 12px;
}

.footer-links {
  border-top: 1px solid #f0f0f0;
  padding-top: 12px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.soft-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border-radius: 50px;
  padding: 11px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.soft-btn .chev {
  font-size: 11px;
  opacity: 0.7;
}

.soft-btn.gold {
  color: #c27803;
  background: #fff8f0;
  border: none;
}

.soft-btn.gold:hover {
  background: #fff1e0;
}

.soft-btn.blue {
  color: #4c6ef5;
  background: #f5f7ff;
  border: none;
}

.soft-btn.blue:hover {
  background: #eef1ff;
}

.text-link.muted {
  display: block;
  width: 100%;
  background: none;
  border: none;
  padding: 8px 0 4px;
  font-size: 12px;
  font-weight: 500;
  color: #999;
  cursor: pointer;
  text-align: center;
}

.text-link.muted:hover {
  color: #e94560;
}

.tip-panel {
  margin: 4px 0 8px;
  animation: tipIn 0.25s ease;
  text-align: left;
}

@keyframes tipIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tip-text {
  font-size: 13px;
  color: #999;
  margin: 0 0 10px 0;
  text-align: center;
}

.qr-code {
  width: 220px;
  max-width: 90%;
  height: auto;
  border-radius: 12px;
  border: 2px solid #f0f0f0;
  display: block;
  margin: 0 auto 8px;
  background: #111;
  object-fit: contain;
}

.compliance-note {
  margin: 10px 0 0 0;
  font-size: 11px;
  color: #b0b0b0;
  line-height: 1.5;
}

@media (max-width: 420px) {
  .result {
    padding: 12px;
  }

  .result-card {
    padding: 28px 18px;
    border-radius: 18px;
  }

  h1 {
    font-size: 22px;
  }

  .action-row {
    gap: 8px;
  }

  .btn-share,
  .btn-save {
    font-size: 13px;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
