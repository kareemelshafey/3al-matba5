const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionsSchema = new Schema({
    date:{
        type: String
    },
    userId:{
        type: mongoose.Types.ObjectId
    },
    itemsAndMeals:{
        type: Array
    },
    totalPrice:{
        type: Number
    }
})

module.exports = transactions=mongoose.model('transactions', transactionsSchema)