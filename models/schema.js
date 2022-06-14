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
