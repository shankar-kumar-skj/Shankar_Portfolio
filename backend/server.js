// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // Only needed if Node < 18

// Load environment variables
dotenv.config({ path: "./.env" });

// Debug check
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY in .env");
  console.error("📂 Current working directory:", process.cwd());
  console.error("📝 Make sure your .env file is in this directory and has: GEMINI_API_KEY=your_key");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

// Gemini API config
const GEMINI_MODEL = "gemini-1.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message && (!history || history.length === 0)) {
      return res.status(400).json({ error: "message is required" });
    }

    // Build conversation history
    const historyArray = Array.isArray(history) ? history : [];
    const lastUser = message ? [{ sender: "user", text: message }] : [];
    const convo = historyArray.concat(lastUser).slice(-12);

    const contents = convo.map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const body = {
      contents,
      generationConfig: {
        temperature: 0.2,
        topP: 0.95,
        candidateCount: 1,
      },
    };

    const resp = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const textResponse = await resp.text();

    if (!resp.ok) {
      console.error("❌ Gemini API error:", resp.status, textResponse);
      return res.status(resp.status).json({
        error: "Gemini API error",
        details: textResponse,
      });
    }

    const data = JSON.parse(textResponse);
    let reply = "Sorry, I couldn't generate a response.";

    const cand = data?.candidates?.[0];
    if (cand?.content?.parts) {
      reply = cand.content.parts.map((p) => p.text).join("\n");
    }

    res.json({ reply });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({
      error: "server error",
      message: err?.message || String(err),
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
