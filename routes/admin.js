const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()
const Admin = require("../models/admin")

router.post("/createAdmin", async (req, res) => {
  try {
    console.log(req.body)
    const admin = await Admin.create(req.body)
    res.json({ msg: "Admin was created successfully", admin })
  } catch (error) {
    console.log(error)
    res.status(422).send({ error: "Can not create admin" })
  }
})

router.post("/viewAllAdmins", async (req, res) => {
  try {
    const Admins = await Admin.find()
    res.json({ data: Admins })
  } catch (error) {
    res.status(422).send({ error: "No admins found" })
  }
})

router.post("/viewAdmin", async (req, res) => {
  try {
    const id = req.body.id
    const admin = await Admin.findById(id)
    res.json({ data: admin })
  } catch (error) {
    res.status(422).send({ error: "Admin not found" })
  }
})

router.post("/deleteAdmin", async (req, res) => {
  try {
    const id = req.body.id
    await Admin.findByIdAndDelete(id)
    res.json({ msg: "Deleted successfully" })
  } catch (error) {
    res.status(422).send({ error: "No admin found" })
  }
})
module.exports = router
