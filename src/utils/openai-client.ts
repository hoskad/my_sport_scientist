import { OpenAI } from "langchain/llms";

if (!process.env.OPEN_API_KEY) {
  throw new Error("Missing OpenAI Credentials");
}

export const openai = new OpenAI({
  temperature: 0,
});
