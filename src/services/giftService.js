export async function fetchIdeas(payload) {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    // body: JSON.stringify(payload),
  })

  return res.json()
}
