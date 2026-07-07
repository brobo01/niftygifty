import { generateIdeas } from "../../../lib/giftGenerator"

const rateLimitMap = new Map()

export async function POST(req) {
  // const ip = req.headers.get("x-forwarded-for") || "anon"
  // const now = Date.now()

  // const windowMs = 60000
  // const limit = 5

  // const hits = rateLimitMap.get(ip) || []
  // const recent = hits.filter((t) => now - t < windowMs)

  // if (recent.length >= limit) {
  //   return Response.json({ error: "Rate limit exceeded" }, { status: 429 })
  // }

  // recent.push(now)
  // rateLimitMap.set(ip, recent)

  const { prompt } = await req.json()

  const data = await generateIdeas(prompt)

  return Response.json(
    { ideas: JSON.parse(data.text) },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
      },
    },
  )
}
