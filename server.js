require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const htmling = require('htmling');
const Pusher = require('pusher');

const app = express();

app.engine('html', htmling.express(__dirname + '/views/', {watch:true}));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

// leave this here to show url on screen
// app.get('/stepseq', (req, res) => {
  // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  // var thisUrl = req.protocol + '://' + req.get('host');
  // req.THIS_URL = thisUrl;
  // req.JOIN_URL = thisUrl+'/minim';
  // req.PUSHKEY = process.env.PUSHKEY;
  // res.render('stepseq', req);
// });

// var clientIndex = 0
// app.post('/pusher/auth', function(req, res) {
//   const socket_id = req.body.socket_id;
//   const channel_name = req.body.channel_name;
//   if(socket_id && channel_name) {
//     const userID = socket_id.replace(/\./g, "")+Date.now();
//     res.send(pusher.authenticate(
//       socket_id,
//       channel_name,
//       {user_id: userID, user_info: { clientIndex: clientIndex++ }}
//     ))
//   } else {
//     res.sendStatus(401)
//   }
// });

app.listen(process.env.PORT || 14537);