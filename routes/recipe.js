const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Recipe = require('../models/recipe')

router.post('/signUp',async(req,res)=>{
    try{
    const Recipes = await Recipe.create(req.body)
    res.json({msg:'Recipe created successfully', Recipes})
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