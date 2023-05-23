import express from "express";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/about", function (req, res) {
  res.send("Im henry");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
