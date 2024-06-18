const express = require('express')
const app = express()
const port = 3000 

app.get('/suma', (req, res) => {
    var sumando1 = 6
    var sumando2 = 10
    var resultado = sumando1 + sumando2
  res.send("El resultado es " + resultado)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

