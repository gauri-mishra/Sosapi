const express = require('express')
const router = express.Router()
const sendSMS = require('./SMSservice');

router.get('/', async (req, res) => {
   try{
       
        res.json({message : "Nothing To Fetch"})
   }
   catch(err)
   {
    res.json({ message: err })
   }
}
);

router.post('/', async (req, res) => {
  const smsbody = {}  
  console.log("hi from post")
    try {
      smsbody.phone = 7007870498
      const result =   await sendSMS(smsbody)
      res.json({message : result.message})
      console.log(result.message)
       
    } catch (err) {
      console.log(err)
      res.json({message :"failed"})
     
    }

})

module.exports = router


