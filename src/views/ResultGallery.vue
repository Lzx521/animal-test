<template>
  <div class="gallery">
    <div class="panel">
      <h1>结果总览（16 种）</h1>
      <p class="hint">点左侧称号，右侧实时预览结果页。</p>
      <div class="case-list">
        <button
          v-for="item in previewItems"
          :key="item.id"
          type="button"
          class="case-btn"
          :class="{ active: item.id === activeId }"
          @click="activeId = item.id"
        >
          <span class="name">{{ item.name }}</span>
          <span class="meta">{{ item.kind }}</span>
        </button>
      </div>
      <div class="tools">
        <a :href="activeUrl" target="_blank" rel="noreferrer">新窗口打开当前结果</a>
      </div>
    </div>

    <div class="preview">
      <iframe v-if="activeUrl" :src="activeUrl" title="result preview"></iframe>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { buildSharePayload, encodeSharePayload, matchResult } from '../data/questions'

const cases = [
  ['单维', { procrastination: 30, attention: 20, rebuttal: 10, drama: 8, creativity: 6 }],
  ['单维', { procrastination: 10, attention: 30, rebuttal: 20, drama: 8, creativity: 6 }],
  ['单维', { procrastination: 10, attention: 8, rebuttal: 30, drama: 20, creativity: 6 }],
  ['单维', { procrastination: 10, attention: 8, rebuttal: 6, drama: 30, creativity: 20 }],
  ['单维', { procrastination: 10, attention: 8, rebuttal: 6, drama: 20, creativity: 30 }],
  ['并列', { procrastination: 20, attention: 20, rebuttal: 20, drama: 20, creativity: 20 }],
  ['组合', { procrastination: 30, attention: 28, rebuttal: 10, drama: 8, creativity: 6 }],
  ['组合', { procrastination: 30, attention: 10, rebuttal: 28, drama: 8, creativity: 6 }],
  ['组合', { procrastination: 28, attention: 10, rebuttal: 8, drama: 30, creativity: 6 }],
  ['组合', { procrastination: 28, attention: 10, rebuttal: 8, drama: 6, creativity: 30 }],
  ['组合', { procrastination: 10, attention: 30, rebuttal: 28, drama: 8, creativity: 6 }],
  ['组合', { procrastination: 10, attention: 30, rebuttal: 8, drama: 28, creativity: 6 }],
  ['组合', { procrastination: 10, attention: 30, rebuttal: 8, drama: 6, creativity: 28 }],
  ['组合', { procrastination: 10, attention: 8, rebuttal: 28, drama: 30, creativity: 6 }],
  ['组合', { procrastination: 10, attention: 8, rebuttal: 28, drama: 6, creativity: 30 }],
  ['组合', { procrastination: 10, attention: 8, rebuttal: 6, drama: 28, creativity: 30 }]
]

function appRoot() {
  const path = window.location.pathname.replace(/\/$/, '')
  return `${window.location.origin}${path}`
}

const previewItems = cases
  .map(([kind, scores]) => {
    const result = matchResult(scores)
    const token = encodeSharePayload(buildSharePayload(result, scores))
    return {
      id: result.id,
      name: result.name,
      kind,
      url: `${appRoot()}/#/result?share=${token}`
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'zh'))

const activeId = ref(previewItems[0]?.id || '')
const activeUrl = computed(() => previewItems.find((x) => x.id === activeId.value)?.url || '')
</script>

<style scoped>
.gallery {
  min-height: 100vh;
  padding: 16px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 12px;
}

.panel,
.preview {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.08);
}

.panel {
  padding: 14px;
}

h1 {
  margin: 0 0 6px;
  font-size: 20px;
  color: #1a1a2e;
}

.hint {
  margin: 0 0 10px;
  color: #666;
  font-size: 12px;
}

.case-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: calc(100vh - 160px);
  overflow: auto;
}

.case-btn {
  border: 1px solid #e8e8e8;
  background: #f9fafc;
  border-radius: 10px;
  text-align: left;
  padding: 8px 10px;
  cursor: pointer;
}

.case-btn.active {
  border-color: #e94560;
  background: #fff1f4;
}

.name {
  display: block;
  color: #1e1e30;
  font-weight: 600;
  font-size: 13px;
}

.meta {
  font-size: 11px;
  color: #888;
}

.preview {
  padding: 8px;
}

iframe {
  width: 100%;
  height: calc(100vh - 32px);
  border: 0;
  border-radius: 12px;
}

.tools {
  margin-top: 8px;
  font-size: 12px;
}

@media (max-width: 980px) {
  .gallery {
    grid-template-columns: 1fr;
  }
  .case-list {
    max-height: 220px;
  }
  iframe {
    height: 70vh;
  }
}
</style>
