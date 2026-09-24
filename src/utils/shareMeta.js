/** 更新页面标题与 meta，便于微信右上角分享预览 */

function upsertMeta(selector, attr, key, content) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function setShareMeta({ title, description } = {}) {
  if (title) {
    document.title = title
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
  }
  if (description) {
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
  }
}

export function appRoot() {
  const path = window.location.pathname.replace(/\/$/, '')
  return `${window.location.origin}${path}`
}

export function homeShareUrl() {
  return `${appRoot()}/#/`
}

export function resultShareUrl(token) {
  if (!token) return homeShareUrl()
  return `${appRoot()}/#/result?share=${encodeURIComponent(token)}`
}
