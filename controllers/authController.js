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

module.exports.location_create_post = async (req, res) => {
  let { locationName, description, website, phone } = req.body; //requested data

  // USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------
  // imported from locationapi.js

  axios
    .request(options)
    .then((response) => {
      const insertData = new MongooseModel({
        locationName,
        description,
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
    .catch(function (error) {
      console.error(error);
    });
  // ------------------------------------------------------------------
};

module.exports.location_edit_put = async (req, res) => {};

module.exports.location_delete = async (req, res) => {};

module.exports.location_getOne_get = async (req, res) => {};

module.exports.location_getAll_get = async (req, res) => {};

module.exports.location_calcLocation_get = async (req, res) => {};

module.exports.location_calcLocation_post = (req, res) => {};
