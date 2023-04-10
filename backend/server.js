import exprees from "express";
import dotenv from "dotenv";
import { connetDB } from "./config/db.js";

const app = exprees();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connetDB(MONGO_URI);
    console.log("!MongoDB conected!");
    app.listen(PORT, () => {
      console.log(`Server Running http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
