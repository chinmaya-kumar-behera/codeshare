const mongoose = require("mongoose");

const url =
  "mongodb+srv://chinu2127:Intr%40Psd326@cluster0.yytjihl.mongodb.net/codeshare?retryWrites=true&w=majority";
function connectToDatabase() {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
}

module.exports = { connectToDatabase };
