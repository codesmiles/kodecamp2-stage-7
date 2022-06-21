// jshint esversion: 6
const express = require('express');
const authRoutes = require(`./routes/authRoute`);
const app = express();
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(`/`, authRoutes);

//IMPORT MONGOOSE----------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017/clientLocation`;
// connect to mongoose
mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  console.log(`Connected to MongoDB`);
});
// -----------------------------------------------------------------
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
