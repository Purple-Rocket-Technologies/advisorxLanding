import express from "express";
import payload from "payload";
import { resolve } from "path";

require("dotenv").config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || "your-secret-key",
  express: app,
  onInit: () => {
    console.log("Payload initialized");
  },
});

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Add your own express routes here

app.listen(3000, async () => {
  console.log("Express server listening on port 3000");
});
