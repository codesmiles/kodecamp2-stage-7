const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationDataSchema = new Schema({
  locationName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: { type: String },
  phone: {
      type:Number,
      required:true
  },
  // coordinates:{
  //     type:Number,
  //     required:true
  // }
});



const MongooseModel = mongoose.model("location", locationDataSchema);
module.exports = MongooseModel;
