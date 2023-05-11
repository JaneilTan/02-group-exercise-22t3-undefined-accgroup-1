const express = require("express");
const cors = require("cors");
const app = express();
const ChirpModel = require("./models/ChirpModel");
const formatChirps = require("./formatChirps");

app.use(cors());
app.use(express.json());

app.get("/chirps", async (req, res) => {
  const chirps = await ChirpModel.find({});
  const normalChirps = chirps.map(formatChirps);

  res.status(200).send(normalChirps);
});

app.get("/chirps/:id", async (req, res) => {
  const id = req.params.id;
  const chirp = await ChirpModel.findById(id);

  if (chirp === null) {
    return res.sendStatus(404);
  }

  const normalChirp = formatChirps(chirp);
  res.status(200).send(normalChirp);
});

module.exports = app;
