//import dependensies
const express = require("express");
//initialize express and create express app
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//load env variables
require("dotenv").config();

const restaurants = require ('./routes/restaurants');
//middleware
//use express.json() to get data into json format
app.use(express.json());
app.use(cors());

//routing
app.use('/api/v1/restaurants',restaurants);
//start server
const PORT = process.env.PORT || 5500;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
    app.listen(PORT, console.log(`Sever is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();