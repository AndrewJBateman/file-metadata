// init project
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      multer = require('multer'),
      dotenv = require('dotenv').load(),
      app = module.exports = express(),
      port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post("/upload", (request, response) => {
  
  response.sendStatus(200)
})

// listen for requests :)
const listener = app.listen("3000", () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
