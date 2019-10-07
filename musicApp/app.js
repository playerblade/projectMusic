const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
db.authenticate()
    .then(()=> console.log('db good'))
    .catch(error => console.log('error db'));

var user_route = require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.get('/',(req,resp)=> resp.send('test'));
app.use('/api',user_route);
const PORT = process.env.PORT||3000;
app.listen(PORT,console.log('server start 127.0.0.1: '+PORT));