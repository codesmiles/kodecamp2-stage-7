const MongooseModel = require("../models/schema");
const options = require(`../locationAPI`);
const axios = require("axios");
const validator = require("validator");

// TO RETURN ERROR
const handleErr = (err) => {
  if (err) {
    console.log(err);
  }
};

// REGISTER LOCATION CREATE DATA
module.exports.location_create_post = async (req, res) => {
  try {
    let { name, email, location_description, website, phone } = req.body; //requested data

    if (validator.isEmail(email)) {
      // USE AXIOS TO IMPORT AN EXTERNAL API-------------------------------
      // imported from locationapi.js
      axios.request(options).then((response) => {
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
            statusCode: 201,
          });
        });
      });

      // ------------------------------------------------------------------
    } else {
      res.json({
        successful: false,
        message: `Plseas insert a valid email`,
        statusCode: 400,
      });
    }
  } catch (err) {
    handleErr(err);
  }
};

// EDIT LOCATION PUT REQUEST
module.exports.location_edit_put = async (req, res) => {
const { email, name, location_description, website, phone } = req.body;
  try {
    const editLocation = await MongooseModel.findOneAndUpdate(
      { email },
      { $set: { name, location_description, website, phone } },
      { new: true }
    );
    if (editLocation) {
      res.json({
        successful: true,
        editLocation,
        statusCode: 200,
      });
  } else {
    res.json({
      successful: false,
      message: `${email} does not exist`,
      statusCode: 400,
    });
  }

  } catch (err) {
    handleErr(err);   
  }
    
    
};
// DELETE LOCATION REQUEST
module.exports.location_delete = async (req, res) => {
  try {
    const { email } = req.body;

    // check if the data  exists in the database
    const checkData = await MongooseModel.findOne({ email });
    if (checkData) {
      // delete the data
      const deleteData = await MongooseModel.findOneAndDelete({ email });
      res.json({
        successful: true,
        message: `${checkData.name} has been deleted`,
        statusCode: 200,
      });
    }
    // if the data does not exist in the database
    else {
      res.json({
        successful: false,
        message: `${email} does not exist`,
        statusCode: 400,
      });
    }
  } catch (err) {
    handleErr(err);
  }
};

// GET ONE LOCATION
module.exports.location_getOne_get = async (req, res) => {
  try {
    const { email } = req.body;

    const getOneLocation = await MongooseModel.findOne({ email });
    if (getOneLocation) {
      res.json({
        successful: true,
        message: getOneLocation,
        statusCode: 200,
      });
    } else {
      res.json({
        successful: false,
        message: `${email} does not exist`,
        statusCode: 400,
      });
    }
  } catch (err) {
    handleErr(err);
  }
};

// GET ALL LOCATION
module.exports.location_getAll_get = async (req, res) => {
  try {
    const getAllLocation = await MongooseModel.find();

    if (getAllLocation) {
      res.json({
        successful: true,
        message: getAllLocation,
        statusCode: 200,
      });
    } else {
      res.json({
        successful: false,
        message: `No data`,
        statusCode: 400,
      });
    }
  } catch (err) {
    handleErr(err);
  }
};

// module.exports.location_calcLocation_get = async (req, res) => {};

// CALCLOCATION POST REQ

module.exports.location_calcLocation_post = async (req, res) => {
  try {
    const { email } = req.body;
    const dataLog = await MongooseModel.findOne({ email });

    // CALCULATE DISTANCE-------------------------------------------
    const calcDist = (x1, x2, y1, y2) => {
      let y = x2 - x1;
      let x = y2 - y1;
      const total = Math.sqrt(x * x + y * y);
      const R = 6371; //km
      const totalDistance = Math.round(total * R);
      return `The total distance between you and ${dataLog.name} is ${totalDistance}km`;
    };
    // -----------------------------------------------------------------
    axios
      .request(options)
      .then((response) => {
        const userLongitude = response.data["longitude"];
        const userLatitude = response.data["latitude"];
        const dataLogLongitude = dataLog.longitude;
        const dataLogLatitude = dataLog.latitude;

        res.json({
          successful: true,
          message: calcDist(
            userLatitude,
            dataLogLatitude,
            userLongitude,
            dataLogLongitude
          ),
          statusCode: 200,
        });
      })
      .catch(handleErr(err));
  } catch (err) {
    handleErr(err);
  }
};
