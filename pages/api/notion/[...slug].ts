// pages/api/notion/[...slug].ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = (req.query.slug ?? []) as string[]
    const target = `https://www.notion.so/api/v3/${slug.join('/')}`

    const token = process.env.NOTION_TOKEN
    if (!token) {
      res.status(500).json({ error: 'Missing NOTION_TOKEN (must be token_v2)' })
      return
    }

    const headers: Record<string, string> = {
      'content-type': 'application/json',
      'accept': 'application/json',
      'cookie': `token_v2=${token};`
    }

    const upstream = await fetch(target, {
      method: req.method,
      headers,
      body: ['GET', 'HEAD'].includes(req.method ?? 'GET') ? undefined : JSON.stringify(req.body)
    })

    res.status(upstream.status)
    const buf = Buffer.from(await upstream.arrayBuffer())
    res.send(buf)
  } catch (err: any) {
    res.status(500).json({ error: String(err) })
  }
}
