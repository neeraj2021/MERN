import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => {
  console.log("Running on PORT ", PORT);
});
