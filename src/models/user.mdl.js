const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String ,
        max:20,
        required:[true , "Le nom d'utilisatueur est requis"]
    },
    phone: {
        type: "String",
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports =  new mongoose.model('User' , userSchema);