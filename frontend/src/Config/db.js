// MONGODB ATLAS CONNECTION
require("dotenv").config();

//1.
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("MongoDb connection error");
  }
};

module.exports = connection;
