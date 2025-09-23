import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(bodyParser.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Set in your .env

// Function to format Gemini API response into clean bullet points
function formatGeminiOutput(text) {
  // Remove extra spaces/newlines
  text = text.trim();

  // Add line breaks for readability
  return text
    .replace(/\*\*(.*?)\*\*/g, (_, boldText) => `**${boldText}**`) // Keep bold
    .replace(/\* /g, "• ") // Convert markdown bullets to "•"
    .replace(/\n{2,}/g, "\n"); // Normalize line breaks
}

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
        GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    // Get text output from Gemini
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const formattedText = formatGeminiOutput(rawText);

    res.send({ result: formattedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
