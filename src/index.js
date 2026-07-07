import express from "express";
import dotenv from "dotenv";
// or
// import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const app = express();

dotenv.config({
  path: "./src/.env",
});
const port = process.env.PORT || 9000;
// const port = 8000;
// ------------------------------
app.get("/", (req, res) => {
  res.send("Hello nitin");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
// --------------------------------------

// always use semicolon before iifee to good development practice and to avoid  conflict with other code
// (async () => {
// try {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`);
//   app.on("error", (err) => {
//     console.error("Error while connecting to database", err);
//     throw err;
//   });

// } catch (error) {
//   console.error("Error while connecting to database", error);
//   throw err
// }
// })();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("connected to database =>nitn bhardwaj");

    app.on("error", (error) => {
      console.log(
        "cant able to connect to the dataase in index.js file",
        error
      );
      throw error;
    });
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.error("error while  connecting to database",error);
    throw error;
  }
})();
