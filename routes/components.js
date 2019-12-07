const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Component = require('../models/components')
const User = require('../models/user')

router.post('/',async(req,res)=>{
    try{
    const Components = await Component.create(req.body)
    res.json({msg:'Component created successfully', Components})
    } catch(error) {
        res.status(422).send({ error: 'Can not create component' })
    }
})

router.post('/addtoCart',async(req,res)=>{
    try{
    const idItem = req.body.idItem
    const id= req.body.id
    console.log(id)
    const user = await User.findById(id)
    console.log(user)
    const item = await Component.findById(idItem)
    console.log(item)
        const newItems=user.cart.itemsAndMeals
        const itemFound = newItems.filter(element => element._id == idItem);
        
      if(itemFound.length!=0){
        res.status(400).send({ error: 'already Added' })
   
      }else{

        newItems.push(item)


const totalPrice =user.cart.totalBalance+ item.totalPrice
console.log(user.cart.itemsAndMeals)

console.log(totalPrice)
    
 const userr= await User.updateOne({_id:id}, { cart:{
    itemsAndMeals:newItems,
    totalBalance:totalPrice
 } });
console.log(userr)
    res.json({msg:'Cart updated successfully', userr})
      }
    } catch(error) {
        console.log(error)
        res.status(422).send({ error: 'Can not add to my cart' })
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