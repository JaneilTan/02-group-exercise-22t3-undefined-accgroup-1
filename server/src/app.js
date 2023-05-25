const express = require("express");
const cors = require("cors");
const app = express();
const ChirpModel = require("./models/ChirpModel");

app.use(cors());
app.use(express.json());

app.get("/chirps", async (req, res) => {
  const chirps = await ChirpModel.find({});

  res.status(200).send(chirps);
});

app.get("/chirps/:id", async (req, res) => {
  const id = req.params.id;
  const chirp = await ChirpModel.findById(id);

  if (chirp === null) {
    return res.sendStatus(404);
  }

  res.status(200).send(chirp);
});

app.post("/chirps", async (req, res) => {
  const { body } = req;
  const chirp = new ChirpModel(body);
  await chirp.save();

  return res.status(200).send(chirp);
});

module.exports = app;
