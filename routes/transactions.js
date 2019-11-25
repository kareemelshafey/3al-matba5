const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Transaction = require('../models/transactions')

router.post('/signUp',async(req,res)=>{
    try{
    const Transactions = await Transaction.create(req.body)
    res.json({msg:'User created successfully', Transactions})
    } catch(error) {
        res.status(422).send({ error: 'Can not create transaction' })
    }
})

router.post('/viewAllTransactions',async(req,res)=>{
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