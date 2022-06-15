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

const summonAxios =()=>{
  axios.request(options).then(function (response) {
    // console.log(response.data["country"]);
    // console.log(response.data["latitude"]);
    // console.log(response.data["longitude"])
    console.log(response.data);
    
  }).catch(function (error) {
    console.error(error);
  });
}

summonAxios();

// CREATE DATA
module.exports.location_create_post = async (req, res) => {
  let { name, email, location, location_description, website, phone } = req.body; //requested data
  // USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------
  // imported from locationapi.js
  axios
    .request(options)
    .then((response) => {
      const insertData = new MongooseModel({
        name,
        email,
        location,
        Location_description,
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
    .catch(handleErr(err));
  // ------------------------------------------------------------------
};

// PUT REQUEST
module.exports.location_edit_put = async (req, res) => {
  const { locationName } = req.body;

  const updateData = await MongooseModel.findOneAndUpdate();
};

// DELETE REQUEST
module.exports.location_delete = async (req, res) => {
  const deleteData = await MongooseModel.findOneAndDelete({ id: id });
};

module.exports.location_getOne_get = async (req, res) => {
  const getOneLocation = await MongooseModel.findOne();
};

module.exports.location_getAll_get = async (req, res) => {
  const getAllLocation = await MongooseModel.find();
};

module.exports.location_calcLocation_get = async (req, res) => {};

module.exports.location_calcLocation_post = (req, res) => {
  const { email } = req.body;
  axios
    .request(options)
    .then((response) => {
      // console.log(response.data);
    })
    .catch(handleErr(err));



};
