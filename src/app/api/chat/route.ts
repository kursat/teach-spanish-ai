import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIManager } from "@/lib/ai/AIManager";
import { ConversationChain } from "langchain/chains";
import { ChatMessageHistory } from "langchain/memory";
import { BaseMessage, SystemMessage } from "langchain/schema";
import fs from "fs";

export async function POST(request: Request) {
  const systemPromptTemplate = fs.readFileSync(
    process.cwd() + "/src/lib/prompts/TutorSetup.txt",
    "utf8",
  );

  const { input } = await request.json();

  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const pastMessages: BaseMessage[] = [new SystemMessage(systemPromptTemplate)];

  const memory = AIManager.getMemory({
    chatHistory: new ChatMessageHistory(pastMessages),
  });

  const chain = new ConversationChain({ llm: model, memory: memory });

  const result = await chain.invoke({
    input,
  });

  return Response.json(result.response);
}
