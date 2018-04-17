import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world"));

app.listen("3000", () => console.log("Server runnign in the 3000"));
