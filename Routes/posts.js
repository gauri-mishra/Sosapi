const express = require('express')
const router = express.Router()
const Sos = require('../models/SOS')

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
    console.log(req.body)
    const post = new Sos({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost)

    }
    catch (err) {
        res.json({ message: err })
    }

})

module.exports = router