const express = require('express')
const router = express.Router()
const Sos = require('../models/SOS');
const sendSMS = require('./SMSservice');

router.get('/', async (req, res) => {
   try{
        const fetched = await Sos.find()
        res.json(fetched)
   }
   catch(err)
   {
    res.json({ message: err })
   }
}
);

router.post('/', async (req, res) => {
    
  console.log("hi from post")
    try {
      const smsbody = {
      
      }
      smsbody.phone = 7007870498
     await sendSMS(smsbody)
      res.json({message : "success"})
      
    } catch (err) {
      console.log(err)
      res.json({message :"failed"})
    }
   

})

module.exports = router


