import { BufferMemory, BufferMemoryInput } from "langchain/memory";

export class AIManager {
  private static memory: BufferMemory;

  private constructor() {}

  public static getMemory(input?: BufferMemoryInput): BufferMemory {
    if (!AIManager.memory) {
      AIManager.memory = new BufferMemory(input);
    }

    return AIManager.memory;
  }
}
