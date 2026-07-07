import { GoogleGenAI } from "@google/genai"

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({})

export async function generateIdeas(prompt) {
  console.log("helo")
  const schema = {
    description: "List of product or project ideas",
    type: "array",
    items: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "string" },
        why_it_fits: { type: "string" },
        url: { type: "string" },
      },
      required: ["name", "description", "price", "why_its_useful", "url"],
    },
  }
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    // model: "gemini-1.5-flash",
    contents: prompt,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
    tools: [{ googleSearch: {} }],
  })
  console.log("response", response)
  return response
}
