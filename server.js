// init project
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      multer = require('multer'),
      upload = multer({dest: 'uploads'}),
      app = module.exports = express(),
      port = process.env.PORT || 8080;
    
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('upfile'), (req, res, next) => { 
  var fileSize = req.file && req.file.size;
  console.log(typeof(fileSize)); //should return 'number'
  res.json(typeof fileSize == 'undefined' ? 
          {error: 'sorry, but there is a file error'} : 
          {name:  req.file.originalname,
           type:  req.file.mimetype,
           size:  req.file.size +' bytes'}
  );
app.delete('/upload', 
});

// listen for requests :)
const listener = app.listen("3000", () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
