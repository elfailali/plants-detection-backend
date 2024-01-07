const express = require("express");
const router = express.Router();
const Plant = require("../models/plantModel");

router.route("/plants").get((req, res) =>{
    try {
        Plant.find({})
        .then(foundPlants => res.json(foundPlants))
        
    } catch (error) {
        console.log(error)
    }
    

})

module.exports = router;