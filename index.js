var express = require('express');
var opn     = require('opn');
var morgan  = require('morgan');
var states = require('./states');


const app  = express();
const port = 8080;

/* write code here */

app.use(express.static('./'));

app.use('*', (req, res, next) => {
  res.sendFile('./index.html');
});


console.log(states.states);

/* write code here */

app.listen(8080, function(){
  console.log('listening on port' + port);
  opn('http://localhost:' + port);
});
