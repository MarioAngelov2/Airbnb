require("dotenv").config();
const express = require("express");
const cors = require("cors");

const router = require("./src/routes/places");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.use("/", router);

app.listen(5001, () => console.log("Server is listening on port 5001..."));
