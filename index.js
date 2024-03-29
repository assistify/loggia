const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.query))
  res.end()
})

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body))
  res.end()
})

app.listen(3000)
