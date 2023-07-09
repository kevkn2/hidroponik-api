const express = require("express")
const model = require("./models/model") // new
const mongoose = require("mongoose")
const router = express.Router()

// Get last post
router.get("/get_one", async (req, res) => {
    try{
        const data = await model.findOne().sort({_id:-1})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get all posts
router.get("/get_all", async (req, res) => {
    try{
        const data = await model.find().sort({_id:-1}).limit(10)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post new
router.post("/post", async (req, res) => {
    const data = new model({
      _id: new mongoose.Types.ObjectId(),
      tds: req.body.tds,
      ph: req.body.ph,
      ec: req.body.ec
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router