import { PineconeClient } from "@pinecone-database/pinecone";

console.log(process.env.PINECONE_ENVIRONEMNT);
if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error("Pinecone environment or API key vars are missing");
}

async function initPineCone() {
  try {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? "",
      apiKey: process.env.PINECONE_API_KEY ?? "",
    });

    return pinecone;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export const pinecone = await initPineCone();
