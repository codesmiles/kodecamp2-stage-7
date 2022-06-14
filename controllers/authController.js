const MongooseModel = require("../models/schema");
const options = require(`../locationAPI`);
const axios = require("axios");

// TO RETURN ERROR
const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

module.exports.location_create_post = (req, res) => {
  // USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data["country"]);
    })
    .catch(function (error) {
      console.error(error);
    });
  // ------------------------------------------------------------------
return 0;

  let { locationName, description, website, phone } = req.body;

  // console.log(locationName, description, website, phone)

  const insertData = new MongooseModel({
    locationName,
    description,
    website,
    phone,
  });
  insertData.save((err, newData) => {
    handleErr(err);
    res.json({
      successful: true,
      newData,
    });
  });
};

module.exports.location_edit_put = async (req, res) => {};

module.exports.location_delete = async (req, res) => {};

module.exports.location_getOne_get = async (req, res) => {};

module.exports.location_getAll_get = async (req, res) => {};

module.exports.location_calcLocation_get = async (req, res) => {};

module.exports.location_calcLocation_post = (req, res) => {};
