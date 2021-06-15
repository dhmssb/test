const express = require ('express')
const bodyParser = require('body-parser')

const user = require ('./routes/user')


const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', user)


module.exports = app