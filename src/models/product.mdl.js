const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        type: String,
        min: 2,
        required: [true]
    },
    description: {
        type: String,
        required: [true]
    },
    tags:{
        type: String,
        required: [true]
    },
    price: {
        type: Number,
        required: [true]
    },
    image:{
        type: String,
        required: [true]
    },
    colors: String,
}, {timestamps: true})

const Product = mongoose.model('Product' , ProductsSchema)
module.exports =  Product