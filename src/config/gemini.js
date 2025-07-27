import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  });

  return response.text || "";
}

export default main;
