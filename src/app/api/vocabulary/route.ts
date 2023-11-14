import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";
import { RunnableSequence } from "langchain/schema/runnable";

export async function POST(request: Request) {
  const { language, level } = await request.json();

  const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      word: z.string().describe("Spanish word to learn"),
      choices: z
        .string()
        .array()
        .describe(
          `${language} word choices, with one of them is the correct translation of the 'word'`,
        ),
      correctAnswer: z.string().describe("Correct translation of the word"),
      level: z.string().describe("Level of the word"),
    }),
  );

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Give a spanish word with level {level} and its level and 5 {language} choices with one of them is the correct translation of the spanish word.\n{format_instructions}",
    ),
    llm,
    parser,
  ]);

  const response = await chain.invoke({
    format_instructions: parser.getFormatInstructions(),
    level,
    language,
  });

  return Response.json(response);
}
