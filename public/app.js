const express = require('express')
const app = express()

app.use(express.static(__dirname + '/assignment'));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
var port = process.env.PORT || 3000;

app.listen(port);