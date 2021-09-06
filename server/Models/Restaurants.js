const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  restuarant_name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  opening_time: {
    type: String,
    required: true,
  },
  closing_time: {
    type: String,
    required: true,
  },
  foodItems: {
    Types: [{ food_name: String, photo: String, price: String }],
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
