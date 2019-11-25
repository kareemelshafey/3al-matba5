const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Component = require('../models/components')

router.post('/signUp',async(req,res)=>{
    try{
    const Components = await Component.create(req.body)
    res.json({msg:'Component created successfully', Components})
    } catch(error) {
        res.status(422).send({ error: 'Can not create component' })
    }
})

router.post('/viewAllComponents',async(req,res)=>{
    try{
        const Components = await Component.find()
        res.json({data: Components})
    } catch (error){
        res.status(422).send({error: 'No Components found'})
    }
})

router.post('/viewComponent',async(req,res)=>{
    try{
        const id = req.body.id
        const component = await Component.findById(id)
        res.json({data: component})
    } catch(error){
        res.status(422).send({error: 'Component not found'})
    }
})

router.post('/delete',async(req,res)=>{
    try{
        const id = req.body.id
        await Component.findByIdAndDelete(id)
        res.json({msg: 'Deleted successfully'})
    } catch(error) {
        res.status(422).send({error: 'No component found'})
    }
})
module.exports = router