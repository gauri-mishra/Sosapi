
require('dotenv').config();
const axios = require('axios');
const { urlencoded } = require('body-parser');
const temp = "Dear GSM, your GMS loan transaction is scheduled with Rupeek on hi at hi. A team has been allocated for your transaction tomorrow. We will reach out to you over call tomorrow morning between 8:30 AM and 9:00 AM to re-confirm your transaction details. Request your availability to enable us to offer you a seamless experience"

const sendSMS = async (options) => {
    console.log("sms response is = ")
    try {

        const params = new URLSearchParams({
            method: 'sms',
            api_key: process.env.API_KEY,
            sender: 'RUPEEK',
            to: options.phone,
            message: encodeURIComponent(temp)
        }).toString();
        const url = process.env.BASE_URL + params;
        const apiResponse = await axios.get(url);
        
        console.log(apiResponse.data)
       return apiResponse.data
    } catch (err) {
        console.log(err)
        return err
    }
};

module.exports = sendSMS