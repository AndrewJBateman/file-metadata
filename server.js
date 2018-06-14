'use strict';
// init project
const express = require('express'),
      fs = require('fs'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      multer = require('multer'),
      upload = multer({dest: 'uploads'}),
      app = module.exports = express(),
      port = process.env.PORT || 8080;
    
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) =>{ 
  var fileSize = req.file && req.file.size;
  console.log(typeof(fileSize)); //should return 'number'
  res.json(typeof fileSize == 'undefined' ? 
          {error: 'sorry, but there is a file error'} : 
          {name:  req.file.originalname,
           type:  req.file.mimetype,
           size:  req.file.size +' bytes'}
  ); 
});

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

// listen for requests :)
const listener = app.listen(port, () => {
  console.log(`Your app is listening on ` +port)
})
