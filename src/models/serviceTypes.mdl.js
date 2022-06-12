const mongoose = require('mongoose');

const Schema = mongoose.Schema

const serviceTypes = new Schema({
    label: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
    },
}, {timestamps: true})

module.exports = mongoose.model('ServiceType' , serviceTypes)