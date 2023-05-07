import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { PineconeStore } from "langchain/vectorstores";
import { PDFLoader } from "langchain/document_loaders";
import { PineconeClient } from "@pinecone-database/pinecone";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";

export const run = async () => {
  const loader = new DirectoryLoader("../docs", {
    ".pdf": (path) => new PDFLoader(path),
  });
  const rawDocs = await loader.load();

  console.log(rawDocs);
};

const loader = new DirectoryLoader("../docs", {
  ".pdf": (path) => new PDFLoader(path),
});
const docs = await loader.load();

console.log({ docs });
