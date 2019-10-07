var express = require('express');

var  userController = require('../controller/user');
// var  api = express();
var api = express.Router();

api.get('/get',userController.get);
api.post('/register',userController.save);
api.put('/update/:id',userController.update);
api.put('/delete/:id',userController.kill);

module.exports = api;
