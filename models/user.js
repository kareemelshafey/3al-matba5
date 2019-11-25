const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    
    email: {
     type: String
    },
    password: {
     type: String
    },
    fullName: {
        type: String
    },
    address:{
      type: String
    },
    phoneNumber:{
      type: String
    },
    cart:{
        itemsAndMeals:{
            type: Array
        },
        totalBalance:{
            type: Number
        }
    }
   
})

module.exports = user=mongoose.model('users', userSchema)