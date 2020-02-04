import * as functions from "firebase-functions";
import express from "express";
import next from "next";
import path from "path";
import API from "./api/index";
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
});
const handle = nextApp.getRequestHandler();

export const hosting = functions.https.onRequest(async (req, res) => {
  await nextApp.prepare();
  const app = express();
  app.use("/_api", API);
  // tslint:disable-next-line:no-shadowed-variable
  app.get("*", async (req, res) => {
    console.log("File: " + req.originalUrl);
    await handle(req, res);
  });
  app(req, res);
});
