const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    createdDate: { type: Date, required: true },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const ChirpModel = mongoose.model("Chirp", schema);

module.exports = ChirpModel;
