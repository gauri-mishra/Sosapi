const mongoose = require('mongoose')

const SosSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now 
    }
})

module.exports = mongoose.model('Sos',SosSchema)