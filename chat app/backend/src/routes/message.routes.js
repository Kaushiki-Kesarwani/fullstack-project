const express = require('express');
const router = express.Router();

router.get('/send',(req,res)=>{
    res.send("hey! i am message route");
});


module.exports = router;