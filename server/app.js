const express = require('express')
const bodyParser = require('body-parser')
const cors  = require('cors')
const morgan = require('morgan')
const app =express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req,res) => {
  res.send({
    message:`Hello ${req.body.email}! Your user was registered! Have a nice day!`
  })
})
app.get('/status', (req,res) => {
  res.send({
    message:`Hello server is running! Have a nice day!`
  })
})
app.listen(process.env.PORT || 8082)
