const mongoose = require("mongoose");
const db = require("../Config/db");

// getting the schema property
const { Schema } = mongoose;

// creating the schema for the database

const contactScheme = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  contactNo: {
    type: Number,
    lowercase: true,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const contactModel = db.model("contact", contactScheme);

module.exports = contactModel;
