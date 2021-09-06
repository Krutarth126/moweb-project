const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const RestaurantSchema = require("./Models/Restaurants.js");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// connect to DB
const Connection_Url = process.env.CONNECTIUON_URL;
mongoose.connect(
  Connection_Url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    console.log("connected to db");
  }
);

const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.get("/api/get-all-restraunts", async (req, res) => {
  let data = await RestaurantSchema.find();
  res.send(data);
});

app.post("/api/create-restraunt", async (req, res) => {
  const data = req.body;
  const postData = await RestaurantSchema.create(data);
  res.send(postData);
});

app.listen(port, () => {
  console.log("Stated at Port", port);
});
