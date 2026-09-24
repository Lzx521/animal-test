/** 百度统计站点 ID：在百度统计后台创建站点后填到这里，或设环境变量 VITE_BAIDU_HM_ID */
export const BAIDU_HM_ID = (import.meta.env.VITE_BAIDU_HM_ID || '').trim()

/** 加载百度统计脚本；未配置 ID 时跳过 */
export function initAnalytics() {
  if (!BAIDU_HM_ID || typeof document === 'undefined') return
  try {
    window._hmt = window._hmt || []
    if (document.querySelector(`script[data-baidu-hm="${BAIDU_HM_ID}"]`)) return
    const s = document.createElement('script')
    s.async = true
    s.src = `https://hm.baidu.com/hm.js?${BAIDU_HM_ID}`
    s.dataset.baiduHm = BAIDU_HM_ID
    document.head.appendChild(s)
  } catch {
    // 统计失败不影响主流程
  }
}

/**
 * 自定义事件打点（静默失败）
 * @param {string} eventName 如 result_view / share_click / save_click / tip_expand
 */
export function track(eventName) {
  if (!eventName) return
  try {
    window._hmt = window._hmt || []
    window._hmt.push(['_trackEvent', 'animal_test', 'action', String(eventName)])
  } catch {
    // ignore
  }
}
