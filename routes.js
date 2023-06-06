const express = require("express")
const model = require("./models/model") // new
const router = express.Router()

// Get all posts
router.get("/get", async (req, res) => {
    try{
        const data = await model.findOne().sort({_id:-1})
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post new
router.post("/post", async (req, res) => {
    const data = new model({
      name: req.body.name,
      dick_size: req.body.dick_size
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