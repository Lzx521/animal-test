<template>
    <div class="home">
      <div class="home-card">
        <div class="emoji-big">🧠</div>
        <h1>大五人格 · 野生版</h1>
        <p class="subtitle">认真模型，整活出题。3 分钟测出你的职场人设。</p>
        <p class="desc">
          31 道生活题，专测你上班时最真实的那一面。<br>
          ——你是明天再说教主，还是会开成发布会？
        </p>
        <button @click="start" class="btn-start">开始测试</button>
        <p class="footnote">测完记得发群：看谁的人设最离谱。</p>
        <p class="compliance-note">仅供娱乐参考，不构成专业心理评估或职业建议。</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useQuizStore } from '../stores/quizStore'
  import { setShareMeta } from '../utils/shareMeta'
  import { track } from '../utils/track'

  const router = useRouter()
  const store = useQuizStore()

  onMounted(() => {
    setShareMeta({
      title: '大五人格 · 野生版',
      description: '31 道生活题，3 分钟测出你的职场人设。建议@3个同事一起测，互相公开处刑（友好版）。'
    })
    track('home_view')
  })

  function start() {
    track('quiz_start')
    sessionStorage.removeItem('animal-test-just-finished')
    store.reset()
    router.push('/quiz')
  }
  </script>
  
  <style scoped>
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }
  
  .home-card {
    background: white;
    border-radius: 24px;
    padding: 48px 40px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }
  
  .emoji-big {
    font-size: 64px;
    margin-bottom: 12px;
  }
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 4px 0;
  }
  
  .subtitle {
    font-size: 15px;
    color: #e94560;
    font-weight: 600;
    line-height: 1.55;
    margin: 0 0 16px 0;
  }
  
  .desc {
    font-size: 15px;
    color: #666;
    line-height: 1.7;
    margin: 0 0 28px 0;
  }
  
  .btn-start {
    background: #e94560;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 14px 48px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .btn-start:hover {
    background: #c73652;
    transform: scale(1.02);
  }
  
  .footnote {
    font-size: 12px;
    color: #999;
    margin: 16px 0 0 0;
  }

  .compliance-note {
    font-size: 11px;
    color: #b0b0b0;
    margin: 8px 0 0 0;
    line-height: 1.5;
  }
  </style>