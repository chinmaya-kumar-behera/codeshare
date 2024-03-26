const mongoose = require('mongoose');

const anoCodeSchema = mongoose.Schema({
  url: { type: String },
  setting: {
    fontSize: { type: Number },
    language: { type: String },
  },
  code: { type: String },
});

module.exports = mongoose.model("anoCodes", anoCodeSchema);