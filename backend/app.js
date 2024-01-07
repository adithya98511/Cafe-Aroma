const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

const userRoute = require("./Routes/Routers");

const app = express();
app.use(cors());

app.use(body_parser.json());
app.use("/", userRoute);

module.exports = app;
