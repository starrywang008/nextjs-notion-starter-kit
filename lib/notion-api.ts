// lib/notion-api.ts
import { NotionAPI } from 'notion-client'

// 计算当前站点的 Origin（生产/预览/本地都能用）
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

// 关键：让所有 /api/v3 请求走我们新建的代理：/api/notion
export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,   // 这里必须是 token_v2
  apiBaseUrl: `${siteOrigin}/api/notion`
})
