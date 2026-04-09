
const express = require('express');

const router = express.Router();


router.get('/getUsers', (req, res) => {
    try{
        res.status(200).json({message: "success", data: ["Rohit", "Monty", "Shivangini", "Simmi"]});
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: e.message});
    }
})


router.post('/createUser', (req, res) => {
    try{
        console.log("test log..")
        let userName = req.body.name;
        res.status(200).json({message: "success", user: userName});
    }
    catch(e){
        console.error(e);
        res.status(500).json({message: e.message});
    }
})


module.exports = router