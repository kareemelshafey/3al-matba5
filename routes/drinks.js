const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()
const Drink = require("../models/drinks")
const User = require("../models/user")

router.post("/", async (req, res) => {
  try {
    const Drinks = await Drink.create(req.body)
    res.json({ msg: "Drink created successfully", Drinks })
  } catch (error) {
    res.status(422).send({ error: "Can not create drink" })
  }
})

router.post("/addtoCart", async (req, res) => {
  try {
    const idItem = req.body.idItem
    const id = req.body.id
    console.log(id)
    const user = await User.findById(id)
    console.log(user)
    const item = await Drink.findById(idItem)
    console.log(item)
    const newItems = user.cart.itemsAndMeals
    const itemFound = newItems.filter(element => element._id == idItem)

    if (itemFound.length != 0) {
      res.status(400).send({ error: "already Added" })
    } else {
      newItems.push(item)

      const totalPrice = user.cart.totalBalance + item.totalPrice
      console.log(user.cart.itemsAndMeals)

      console.log(totalPrice)

      const userr = await User.updateOne(
        { _id: id },
        {
          cart: {
            itemsAndMeals: newItems,
            totalBalance: totalPrice
          }
        }
      )
      console.log(userr)
      res.json({ msg: "Cart updated successfully", userr })
    }
  } catch (error) {
    console.log(error)
    res.status(422).send({ error: "Can not add to my cart" })
  }
})
router.post("/viewAllDrinks", async (req, res) => {
  try {
    const Drinks = await Drink.find()
    res.json({ data: Drinks })
  } catch (error) {
    res.status(422).send({ error: "No Drinks found" })
  }
})

router.post("/viewDrink", async (req, res) => {
  try {
    const id = req.body.id
    const drink = await Drink.findById(id)
    res.json({ data: drink })
  } catch (error) {
    res.status(422).send({ error: "Drink not found" })
  }
})

router.post("/delete", async (req, res) => {
  try {
    const id = req.body.id
    await Drink.findByIdAndDelete(id)
    res.json({ msg: "Deleted successfully" })
  } catch (error) {
    res.status(422).send({ error: "No Drink found" })
  }
})
module.exports = router
