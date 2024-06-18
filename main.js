const express = require('express')
const app = express()
const port = 3000 

app.get('/multiplicacion', (req, res) => {
    var multiplicando1 = 5
    var multiplicando2 = 2
    var resultado = multiplicando1 * multiplicando2
  res.send("El resultado es " + resultado)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

