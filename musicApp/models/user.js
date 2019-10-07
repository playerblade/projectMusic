var Sequelize = require('sequelize');
var db = require('../config/db');

var User = db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {type: Sequelize.STRING},
    username:{type: Sequelize.STRING},
    gmail:{type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    role: {type: Sequelize.STRING},
    image: {type: Sequelize.STRING}
    
},{
        freezeTableName: true,
        timestamps: false
    
});

module.exports = User;