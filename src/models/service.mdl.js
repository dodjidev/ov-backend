const mongoose = require('mongoose');

const Schema = mongoose.Schema
// {"address": "Test addr", 
// "description": "Test", 
// "executionEstimatedTime": "24", 
// "phone": "63999", 
// "typeID": "62a652ad0fd3ffb04d93578d", 
// "userID": 45}
const serviceSchema = new Schema({
    typeID: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        require: [true , "Le reference est réquise"]
    },
    description: {
        type: String,
        required: true
    },
    userID: {
      type: String,
      required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    executionDate: {
        type: Date,
        required: true
    },
    estimatedTime: {
        type: Number,
    },
    status:{
        type: String,
        enum: ['waiting' , 'in-progress' , "finished"],
        default: 'waiting'
    },
    images: {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model('Service' , serviceSchema)