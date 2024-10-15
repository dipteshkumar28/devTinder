const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello world again!!");
});

app.use("/diptesh", (req, res) => {
  res.send("Diptesh Kumar");
});

app.use("/test", (req, res) => {
  res.send("Hello world");
});

app.listen(3000);
