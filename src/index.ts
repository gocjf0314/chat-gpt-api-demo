import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import express, { Express, Request, Response } from "express";
import OpenAI, { ClientOptions } from "openai";
import { fileURLToPath } from "url";
import cors from "cors";
// import request from "request";

configDotenv();

const PORT = process.env.PORT;
const API_KEY = process.env.OPENAI_API_KEY;
const OGR = process.env.OPENAI_ORG;
const configuration: ClientOptions = {
  apiKey: API_KEY,
  organization: OGR,
};
// const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app: Express = express();
// const openai: OpenAI = new OpenAI(configuration);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", async function (req: Request, res: Response) {
  // const stream = await openai.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [{ role: "user", content: "Say this is a test" }],
  //   stream: true,
  // });
  // for await (const part of stream) {
  //   process.stdout.write(part.choices[0]?.delta?.content || "");
  // }
  res.send("My name is ruler");
});

app.post("/", function (req: Request, res: Response) {
  res.send("My name is ruler");
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}....`);
});
