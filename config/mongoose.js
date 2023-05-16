
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://soumitra:56789123%40Sg@cluster0.qtleogu.mongodb.net/hospital-api"
);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "error in connecting with mongodb")
);

db.once("open", () => {
  console.log("succesfully connected with mongo db");
});

module.exports = db;