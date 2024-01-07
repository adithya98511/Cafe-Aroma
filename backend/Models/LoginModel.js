const mongoose = require("mongoose");
const db = require("../Config/db");
const register_model = require("../Models/RegisterModel");

// getting the schema property
const { Schema } = mongoose;

// creating the schema for the database

const loginScheme = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: register_model.modelName, // Reference to the Registration collection
  },
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
