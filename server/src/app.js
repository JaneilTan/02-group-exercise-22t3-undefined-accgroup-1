const express = require("express");
const cors = require("cors");
const app = express();
const chirps = require("./chirps.json");

app.use(cors());
app.use(express.json());

app.get("/chirps", (req, res) => {
  res.status(200).send(chirps);
});

module.exports = app;
