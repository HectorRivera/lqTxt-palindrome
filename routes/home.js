const express = require('express');
const router = express.Router();


router.get('/palindromeQuiz/',(req,res)=>{
  res.render('pages/palindrome')
})

module.exports=router;
