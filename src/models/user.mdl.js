const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String ,
        max:20,
        require:[true , "Le nom d'utilisatueur est requis"]
    },
    phone: {
        type: "String",
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


module.exports =  new mongoose.model(userSchema , 'User');