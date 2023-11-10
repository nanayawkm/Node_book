const express = require('express')
const router = express.Router()


router.get("/", (req,res)=>{
    console.log("Server listening")
    res.render ("index")
})


module.exports = router