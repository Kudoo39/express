const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.listen(8000, () => {
  console.log("Server is running...");
});
