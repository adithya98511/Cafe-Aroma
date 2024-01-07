const mongoose = require("mongoose");
const db = require("../Config/db");

// getting the schema property
const { Schema } = mongoose;

// creating the schema for the database

const loginScheme = new Schema({
  userId: {},

  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const login_Model = db.model("login", loginScheme);

module.exports = login_Model;
