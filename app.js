const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const app = express()
const postsRoute = require('./Routes/posts')

app.use(bodyParser.json())

app.use('/sms',postsRoute)

app.get('/', (req, res) => {
    res.send("we are up and running ")
}
);

app.listen(3000, () => console.log("api server running"))


