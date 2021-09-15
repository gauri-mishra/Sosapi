const express = require('express')
const router = express.Router()
const sendSMS = require('./SMSservice');
const arr = require('./phoneNumberMapping.json');
router.post('/', async (req, res) => {
  const smsbody = {}

  try {
    const reqcity = req.query.city
    smsbody.lmName = req.query.name
    smsbody.lmPhoneNo = req.query.phoneNo
    smsbody.lat = req.query.lat
    smsbody.lon = req.query.lon

    smsbody.phone = arr.filter(item => item.city == reqcity)[0].phoneNo;
    const result = await (sendSMS(smsbody));
    if (result) {
      res.json({
        status: result.status,
        message: result.message,
        phoneNo: smsbody.phone
      })

    }

  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Failed to send alert " })

  }

})

module.exports = router


