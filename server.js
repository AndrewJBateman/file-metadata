// init project
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      multer = require('multer'),
      upload = multer({dest: 'uploads'}),
      dotenv = require('dotenv').load(),
      app = module.exports = express(),
      port = process.env.PORT || 8080;
    
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
  
  res.sendStatus(200)
})

// listen for requests :)
const listener = app.listen("3000", () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
