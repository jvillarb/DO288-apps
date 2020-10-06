var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Simple app update for the Building Applications Lab!\n');
});

app.listen(8080, function () {
  console.log('Simple app update for the Building Applications Lab!');
});

