const Schema = require("../models/schema");

// TO RETURN ERROR
const handleErr = (err) => {
    if (err) {
      console.log(err);
    }
  };


module.exports.location_create_post = (req, res) => {
  
  let { locationName, description, website, phone } = req.body;

  // console.log(locationName, description, website, phone)
  

  const insertData = new Schema({
    locationName,  
    description,
    website,
    phone
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
