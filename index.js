const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://pyounani:1234@boilerplate.hgzuwhx.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MonogoDB Connected....'))
  .catch(err => console.log(err))

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000)