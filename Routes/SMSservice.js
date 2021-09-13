//  'http://api-alerts.solutionsinfini.com/v4/?method=sms&sender=RUPEEK&api_key=A4ca5f92fd7d053f142da15e1fc9e091c&to=[8408996464,9447314476, 7665587666,9833978968]&message=Rupeek Executive Agent007 has reached your designated location. Kindly verify their identity by providing the OTP 1234 before they enter your place. 
// Please read the conditions for the e-KYC process required during the transaction on this link: https://bit.ly/3iQZzIc'
require('dotenv/config')
const axios = require('axios');
const sendSMS = async (options) => {
    console.log("sms hi")
    try {
       
      const params = new URLSearchParams({
        method: 'sms',
        api_key: process.env.api_key,
        sender: 'RUPEEK',
        to: 7007870498,
        message: encodeURIComponent(options.text),
      }).toString();
      const url = "http://api-alerts.solutionsinfini.com/v4"+ params;
      const apiResponse = await axios.get(url);
      return apiResponse;
    } catch (err) {
      console.log(err)
      
    }
  }
  
  module.exports  = sendSMS