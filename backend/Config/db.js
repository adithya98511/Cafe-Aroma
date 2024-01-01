const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://adi511:Adithya511@cluster0.l58apqn.mongodb.net/firstDB"
  )
  .on("open", () => {
    console.log("Connection Success!");
  })
  .on("error", () => {
    console.log("Connectionn Fail!");
  });

module.exports = connection;
