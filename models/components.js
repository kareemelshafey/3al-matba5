const mongoose = require("mongoose")
const Schema = mongoose.Schema

const componentsSchema = new Schema({
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

module.exports = components = mongoose.model("components", componentsSchema)
