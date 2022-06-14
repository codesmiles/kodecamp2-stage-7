// jshint esversion: 6
const express = require('express');
const authRoutes = require(`./routes/authRoute`);
const app = express();

// middlewares
app.use(express.json());
app.use(`/`, authRoutes);

// USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
  params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
  headers: {
    'X-RapidAPI-Key': '15cc8515femsh4a813c24a65da7ap137b0bjsnb5bb0614873b',
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// ------------------------------------------------------------------


//IMPORT MONGOOSE----------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017/clientLocation`;
// connect to mongoose
mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  console.log(`Connected to MongoDB`);
});
// -----------------------------------------------------------------


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})