const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const locationDataSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  locationName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  website: { type: String },
  phone: {
      type:String,
      required:true
  },
  longitude:{
      type:Number,
      required:true
  },
  latitude:{
    type:Number,
    required:true
}
});



const MongooseModel = mongoose.model("location", locationDataSchema);
module.exports = MongooseModel;
