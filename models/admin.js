const mongoose = require("mongoose")
const Schema = mongoose.Schema

const adminSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  fullName: {
    type: String
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  }
})

module.exports = admin = mongoose.model("admins", adminSchema)
