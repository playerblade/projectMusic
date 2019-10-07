var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

function get(request , response) {
    User.findAll().then(users => {
        response.json(users);
    });
    // response.status(200).send("OK");
}
function save(request, response) {
    console.log(request.body);
    bcrypt.hash(request.body.password, null , null , function (err, hash) {
        User.create({
            name: request.body.name,
            username: request.body.username,
            gmail: request.body.gmail,
            role: request.body.role,
            image: request.body.image,
            password: hash
        }).then(function(data) {
           if (data) {
               response.status(200).send({message: 'registered'});
           }else{
               response.status(400).send({message: 'not registered'});
           } 
        });
    });
}

function update(req, res) {
    const newData = req.body;
    console.log(req.params.id);
    User.update(newData,{where: {id:req.params.user_id}})
        .then(user => {
            return res.status(404).json({ message: "update" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "not update" });
        });
}

function kill(req,res) {
    User.destroy({ where: { id: req.params.user_id } })
        .then(user => {
            return res.status(404).json({ message: "delete" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "not delete" }); // server problems
        });
}
module.exports = {get,save,update,kill};
// module.exports = get(request, response);