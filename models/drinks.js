const mongoose = require("mongoose")
const Schema = mongoose.Schema

const drinksSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  totalPrice: {
    type: Number
  },
  type: {
    type: String
  },
  calories: {
    type: Number
  }
})

module.exports = drinks = mongoose.model("drinks", drinksSchema)
