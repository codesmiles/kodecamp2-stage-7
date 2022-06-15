const MongooseModel = require("../models/schema");
const options = require(`../locationAPI`);
const axios = require("axios");
const _ = require("lodash");

// TO RETURN ERROR
const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

// CALCULATE DISTANCE
const calcDist = (x1, x2, y1, y2) => {
  let y = x2 - x1;
  let x = y2 - y1;
  const total = Math.sqrt(x * x + y * y);
  return total;
};


// REGISTER LOCATION CREATE DATA
module.exports.location_create_post = async (req, res) => {
  let { name, email, location_description, website, phone } = req.body; //requested data
  // USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------
  // imported from locationapi.js
  axios
    .request(options)
    .then((response) => {
      const insertData = new MongooseModel({
        name,
        email,
        location: response.data["country"],
        location_description,
        website,
        phone,
        longitude: response.data["longitude"], //data from the api
        latitude: response.data["latitude"], //same
      });
      insertData.save((err, newData) => {
        handleErr(err);
        res.json({
          successful: true,
          newData,
        });
      });
    })
    
  // ------------------------------------------------------------------
};

// EDIT LOCATION PUT REQUEST
module.exports.location_edit_put = async (req, res) => {
  const { email } = req.body;

  const updateData = await MongooseModel.findOneAndUpdate();
};


// DELETE LOCATION REQUEST
module.exports.location_delete = async (req, res) => {
  const { email } = req.body;

 const deleteOneData = await MongooseModel.findOneAndDelete({ email });
res.json({
  succesful:true,
  message: `Profile deleted`,
  statusCode: 200
});
};

// 
module.exports.location_getOne_get = async (req, res) => {
  const { email} = req.body

  const getOneLocation = await MongooseModel.findOne({email});

  res.json({
    successful: true,
    message: getOneLocation,
    statusCode:200
  })
};

module.exports.location_getAll_get = async (req, res) => {
  const { email } = req.body;

  const getAllLocation = await MongooseModel.find({email});

  res.json({
    succesful: true,
    message: getAllLocation,
    statusCode:200
  })
};

// module.exports.location_calcLocation_get = async (req, res) => {};

// CALCLOCATION POST REQ
module.exports.location_calcLocation_post = (req, res) => {
  const { email } = req.body;

  axios
    .request(options)
    .then((response) => {
      // console.log(response.data);
      const userLongitude = response.data["longitude"];
      const userLatitude = response.data["latitude"];
      
      // const dataLog = await MongooseModel.find()

    })
    // .catch(handleErr(err));

  
};
