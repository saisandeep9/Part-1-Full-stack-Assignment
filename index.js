const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyPasrser = require("body-parser");
app.use(express.json());
app.use(bodyPasrser.json());

mongoose
  .connect("mongodb://localhost:27017/db")
  .then(() => console.log("done"))
  .catch((err) => console.log(err, "error"));

const user = require("./routes/userRoutes");
app.use("/api", user);

const server = app.listen(3000, () => console.log("test 300......"));
module.exports = server;
