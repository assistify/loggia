const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.query))
  res.end()
})

app.listen(3000)
