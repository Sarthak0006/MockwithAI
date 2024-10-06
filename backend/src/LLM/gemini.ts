import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../../config";

const genAI: any = new GoogleGenerativeAI(config.GEMINI_API_KEY);

const model: any = genAI.getGenerativeModel({
  model: config.GEMINI_MODEL,
  systemInstruction: config.SYSTEM_PROMPT,
});

const interviewer = async (prompt: string): Promise<void> => {
  try {
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log("chunk: ", chunkText);
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export default interviewer;
