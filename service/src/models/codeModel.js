const mongoose = require('mongoose');

const anoCodeSchema = mongoose.Schema(
  {
    url: { type: String },
    setting: {
      fontSize: { type: Number },
      language: { type: String },
    },
    viewOnly: { type: Boolean, default: false },
    code: { type: String },
    deviceToken: { type: String, default: null },
    user: { type: mongoose.Types.ObjectId, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("codes", anoCodeSchema);