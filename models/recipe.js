const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    items:{
        type: Array
    },
    totalPrice:{
        type: Number
    },
        type:{
            type: String
        }
    

})

module.exports = recipes=mongoose.model('recipes', recipeSchema)