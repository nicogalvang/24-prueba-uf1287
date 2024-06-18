const express = require('express')
const app = express()
const port = 3000 

app.get('/hola', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static(`24-prueba-uf1287`))