const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Transaction = require('../models/transactions')
const User = require('../models/user')
const con = require('../models/user')

router.post('/',async(req,res)=>{
    try{
console.log(req.body.id)
    const user = await User.findById(req.body.userId)
        console.log(user)
    if(user.cart.itemsAndMeals.length==0){

        res.status(422).send({ error: 'Your Cart is still Empty' })
    }   else{
    const Transactions = await Transaction.create(req.body)
    console.log(req.body.userId)
     await User.updateOne({_id:req.body.userId}, { cart:{
        itemsAndMeals:[],
        totalBalance:0
     } });
     res.json({msg:'User created successfully', Transactions})
  
    }
    } catch(error) {
        console.log(error)
        res.status(422).send({ error: 'Can not create transaction' })
    }
})
  
router.post('/viewAllTransactions',async(req,res)=>{
//    console.log(process.env)
   console.log('The value of PORT is:', process.env.PORT);
    try{
        const Transactions = await Transaction.find()
        res.json({data: Transactions})

        
    } catch (error){
        res.status(422).send({error: 'No transactions found'})
    }
})

router.post('/viewTransaction',async(req,res)=>{
    try{
        const id = req.body.id
        const transaction = await Transaction.findById(id)
        res.json({data: transaction})
    } catch(error){
        res.status(422).send({error: 'Transaction not found'})
    }
})

router.post('/delete',async(req,res)=>{
    try{
        const id = req.body.id
        await Transaction.findByIdAndDelete(id)
        res.json({msg: 'Deleted successfully'})
    } catch(error) {
        res.status(422).send({error: 'No transaction found'})
    }
})
module.exports = router