# Analytics + Tip QR Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 结果页接入百度统计事件，赞赏区改为半开/全开，并替换为「云之海」新赞赏码。

**Architecture:** 薄封装 `track()` 调百度 `_hmt.push`；Result 用 `tipExpanded` 控制半开裁切与全开；素材替换 `reward-qr.png` 并升 `?v=3`。无百度 ID 时埋点静默空操作。

**Tech Stack:** Vue 3、百度统计自定义事件、现有 Result.vue

## Global Constraints

- 不统计真实付款；`tip_expand` 仅在半开→全开时记，同页会话只记 1 次
- 赞赏区保持 `data-html2canvas-ignore`
- 统计失败不影响主流程
- 中文 UI 文案保持口语化

---

## File map

| File | Role |
|------|------|
| `src/utils/track.js` | `track(event)` + 可选百度 ID 配置 |
| `index.html` | 百度统计基础脚本（ID 可先占位） |
| `src/views/Result.vue` | 半开 UI、埋点、二维码 v=3 |
| `src/views/Home.vue` | 可选 `home_view` / `quiz_start` |
| `public/assets/reward-qr.png` | 新赞赏码 |

---

### Task 1: 埋点工具 + 百度脚本壳

- [x] 新建 `src/utils/track.js`：导出 `track(name)`，内部 `window._hmt && _hmt.push(['_trackEvent', 'result', 'click', name])`（或等价自定义事件写法）
- [x] 在 `index.html` 加入百度统计 loader；站点 ID 用占位常量 / 注释，便于用户填入
- [x] 手动：无 ID 时页面不报错

### Task 2: 替换赞赏码素材

- [x] 将用户定稿图复制为 `public/assets/reward-qr.png`
- [x] Result 引用改为 `?v=3`

### Task 3: 赞赏半开/全开 + 结果页埋点

- [x] 默认半开：裁切露出约一半二维码 +「展开看清」
- [x] 全开记 `tip_expand`（同页一次）；收起不重复记
- [x] `result_view` / `share_click` / `save_click` 埋点
- [x] `retake` 时重置展开状态与会话内 tip 标记

### Task 4: 首页可选漏斗

- [x] `home_view` onMounted；`quiz_start` 在开始按钮

### Task 5: 自检

- [x] `npm run build` 通过
- [x] 对照设计文档验收清单（缺百度 ID 时注明待填）
