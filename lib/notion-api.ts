// lib/notion-api.ts
import { NotionAPI } from 'notion-client'

// 计算当前站点的 Origin（兼容 Production / Preview / Localhost）
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

// ✅ 关键：拦截所有 /api/v3 请求 → 走我们自建 API 代理
export const notion = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,   // 这里使用你在 Vercel 设置的 token_v2
  apiBaseUrl: `${siteOrigin}/api/notion`
})
