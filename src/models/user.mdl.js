const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type: String ,
        max:20,
        required:[true , "Le nom d'utilisatueur est requis"]
    },
    phone: {
        type: "String",
        unique: [true , "Un utilisateur avec le meme numero de téléphone existe deja"],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    lat: String,
    lng: String
},{timestamps: true})


module.exports =  new mongoose.model('User' , userSchema);