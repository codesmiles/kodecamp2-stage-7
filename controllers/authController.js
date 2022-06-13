// const validator = require("validator");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const Schema = require("../models/schema");

// TO RETURN ERROR
const handleErr = (err) => {
    if (err) {
      console.log(err);
    }
  };


module.exports.location_create_post = async (req, res) => {
  let { location_name, description, website, phone, coordinates } = req.body;

  const insertData = new Schema({
    location_name,  
    description,
    website,
    phone,
    coordinates
  })
  insertData.save((err,newData) =>{
      handleErr(err);
      res.json({
          successful:true,
          newData
      })
  })
};

module.exports.location_edit_put = async (req, res) => {};

module.exports.location_delete = async (req, res) => {};

module.exports.location_getOne_get = async (req, res) => {};

module.exports.location_getAll_get = async (req, res) => {};

module.exports.location_calcLocation_get = async (req, res) => {};

module.exports.location_calcLocation_post = (req, res) => {};
