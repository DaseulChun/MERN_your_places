const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  creator: { type: String, required: true }
});

// Creating the model corresponding to the schema
// mongoose.model('Name of the model', 'Schema it referrs to') will return a constructor function later
// The first argument becomes:
// 1) collections: places
// 2) model: Place
module.exports = mongoose.model("Place", placeSchema);
