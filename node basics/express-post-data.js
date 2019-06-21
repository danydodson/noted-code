const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use('/assets', express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log('MIDDLEWARE');
  next();
});

app.post('/post', (req, res) => {
  console.log(req.body);
});

app.listen(9999);

console.log(`It's working`);