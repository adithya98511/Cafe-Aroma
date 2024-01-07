const mongoose = require("mongoose");
const db = require("../Config/db");
const { Schema } = mongoose;

const regScheme = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  country: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: String,
    required: true,
  },
});

const reg_Model = db.model("register", regScheme);
module.exports = reg_Model;
