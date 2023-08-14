const express = require('express')
const app = express()
const port = 3000

var cors=require('cors')
app.use(cors())

let ob= {
    "id": 100,
    "name":"Danila",
    "infa": "master"
};

app.get('/', (req, res) => {
  res.json(ob);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})