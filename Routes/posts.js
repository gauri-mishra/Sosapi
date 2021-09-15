const express = require('express')
const router = express.Router()
const sendSMS = require('./SMSservice');
const arr = require('./phoneNumberMapping.json');
router.post('/', async (req, res) => {
  const smsbody = {}

  try {

    smsbody.Name = req.body.name
    smsbody.PhoneNo = req.body.phoneNo
    smsbody.empId = req.body.empId
    smsbody.city = req.body.city
    smsbody.option = req.body.option
    smsbody.lat = req.body.latitude
    smsbody.lon = req.body.longitude 
    smsbody.phone = arr.filter(item => item.city == smsbody.city.toString())[0].phoneNo;
    console.log(smsbody)
    const result = await (sendSMS(smsbody));
    if (result) {
      res.json({
        status: result.status,
        message: result.message,
        phoneNo: smsbody.phone
      })
      console.log("Success")
    }

  } catch (err) {
    console.log(err)
    console.log("Failure")
    res.status(400).json({ message: "Failed to send alert " })

  }

})

module.exports = router


