import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({
  path: "./src/.env"
});
const port = process.env.PORT || 9000;
// const port = 8000;
app.get("/", (req, res) => {
  res.send("Hello nitin");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
