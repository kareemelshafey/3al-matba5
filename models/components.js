const mongoose = require('mongoose')
const Schema = mongoose.Schema

const componentsSchema = new Schema({ 
    name:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    }
})

module.exports = components=mongoose.model('components', componentsSchema)