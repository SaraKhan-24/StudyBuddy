const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(express.json());

// Enable CORS for frontend requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are a concise study assistant. When given a topic, respond with exactly 3 flashcard-style bullet points. Each bullet must be brief (1–2 sentences), factual, and directly useful for studying. Use this exact format:

• [Flashcard 1 content]
• [Flashcard 2 content]
• [Flashcard 3 content]

Do not include any headings, introductions, or extra commentary.`;

app.post("/generate-flashcard", async (req, res) => {
  const { topic } = req.body;

  if (!topic || typeof topic !== "string" || topic.trim() === "") {
    return res.status(400).json({ error: "A valid 'topic' string is required." });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate 3 study flashcards for the topic: "${topic.trim()}"`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const text = response.text;
    return res.status(200).json({ flashcards: text });
  } catch (error) {
    console.error("Gemini API error:", error.message);
    return res.status(500).json({ error: "Failed to generate flashcards. Please try again." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`StudyBuddy backend running on http://localhost:${PORT}`);
});
