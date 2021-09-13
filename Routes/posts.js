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
    
  
    try {
      console.log(req.body)
        const smsBody = {};
        smsBody.to = "7007870498";
         smsBody.text = "Rupeek Executive Agent007 has reached your designated location. Kindly verify their identity by providing the OTP 1234 before they enter your place +"/n 
           "Please read the conditions for the e-KYC process required during the transaction on this link: https://bit.ly/3iQZzIc";
           
        await sendSMS(smsBody);
        res.json({message : "done"});


    }
    catch (err) {
      error = "error";
        res.json({ message: error });
    }

})

module.exports = router


