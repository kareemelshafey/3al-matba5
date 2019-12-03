const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')

router.post('/signUp',async(req,res)=>{
    try{
    const Recipes = await Recipe.create(req.body)
    res.json({msg:'Recipe created successfully', Recipes})
    } catch(error) {
        res.status(422).send({ error: 'Can not create recipe' })
    }
})

router.post('/addtoCart',async(req,res)=>{
    try{
    const idRecipe = req.body.idRecipe
    const id= req.body.id
    console.log(id)
    const user = await User.findById(id)
    console.log(user)
    const recipe = await Recipe.findById(idRecipe)
    console.log(recipe)
        const newItems=user.cart.itemsAndMeals

        newItems.push(recipe)

const totalPrice =user.cart.totalBalance+ recipe.totalPrice
console.log(user.cart.itemsAndMeals)

console.log(totalPrice)
    
 const userr= await User.updateOne({_id:id}, { cart:{
    itemsAndMeals:newItems,
    totalBalance:totalPrice
 } });
console.log(userr)
    res.json({msg:'Cart updated successfully', userr})

    } catch(error) {
        res.status(422).send({ error: 'Can not create recipe' })
    }
})


router.post('/viewAllRecipes',async(req,res)=>{
    try{
        const Recipes = await Recipe.find()
        res.json({data: Recipes})
    } catch (error){
        res.status(422).send({error: 'No Recipes found'})
    }
})

router.post('/viewRecipe',async(req,res)=>{
    try{
        const id = req.body.id
        const recipe = await Recipe.findById(id)
        res.json({data: recipe})
    } catch(error){
        res.status(422).send({error: 'Recipe not found'})
    }
})

router.post('/delete',async(req,res)=>{
    try{
        const id = req.body.id
        await Recipe.findByIdAndDelete(id)
        res.json({msg: 'Deleted successfully'})
    } catch(error) {
        res.status(422).send({error: 'No recipe found'})
    }
})
module.exports = router