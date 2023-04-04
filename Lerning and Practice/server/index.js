import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv' 
import helmet from "helmet";
import morgan from "morgan";
import openAiRoutes from "./routes/openai.js";
// import authRoutes from "./routes/auth.js";

// ******** CONFIGURATIONS *************************************************
const app = express()
dotenv.config()
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// ******* OPEN AI CONFIGURATION ************************************************
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

// ********* ROUTES *********************************************************
app.use("/openai", openAiRoutes);
// app.use("/auth", authRoutes);


//  ****** SERVER SETUP ********************************************
const port = process.env.PORT || 9000
app.listen(port,(req,res)=>{
    console.log(`server is started`);
})