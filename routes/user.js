const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const User = require('../models/user')

router.post('/signUp',async(req,res)=>{
    try{
    const User = await User.create(req.body)
    res.json({msg:'User created successfully', User})
    } catch(error) {
        res.status(422).send({ error: 'Can not create user' })
    }
})

router.post('/viewAllUsers',async(req,res)=>{
    try{
        const Users = await User.find()
        res.json({data: Users})
    } catch (error){
        res.status(422).send({error: 'No users found'})
    }
})

router.post('/viewUser',async(req,res)=>{
    try{
        const id = req.body.id
        const user = await User.findById(id)
        res.json({data: user})
    } catch(error){
        res.status(422).send({error: 'User not found'})
    }
})

router.post('/delete',async(req,res)=>{
    try{
        const id = req.body.id
        await User.findByIdAndDelete(id)
        res.json({msg: 'Deleted successfully'})
    } catch(error) {
        res.status(422).send({error: 'No users found'})
    }
})
module.exports = router