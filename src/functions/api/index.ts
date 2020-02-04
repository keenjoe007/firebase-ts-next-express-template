import express from "express";
const api = express();
api.get("/", (req, res, next) => {
  res.status(200).send("REST API");
});
export default api;
