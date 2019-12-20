const express = require('express');
const router = express.Router();

//ROUTE -- Default Default GET
router.get('/',(req,res)=>{
  res.send('Course Definition');
});

module.exports=router;
