const ServiceType = require('../models/serviceType.mdl')

exports.list = (req, res) => {
    onRequest(res, ServiceType.find())
}

exports.store = (req , res) => {
    let data = req.body;
    delete data._id;
    let serviceType = new ServiceType(data);
    onRequest(res, serviceType.save() , 201)
}

exports.update = (req, res) => {
     let _id = req.params.id;
     onRequest(res, ServiceType.updateOne({_id} , {...req.body}) , 201)
}

exports.show = (req, res) => {
    let _id = req.params.id;
    onRequest(res, ServiceType.findById(_id))
}

exports.delete = (req, res) => {
    let _id = req.params.id;
    onRequest(res, ServiceType.deleteOne({_id}))
}

const onRequest = (res ,  promise , status = 200) =>{
    promise
        .then(result => ({result , error: false , status}))
        .catch(err => ({result: false , error: err.message , status: 500}))
        .then( result => res.status(result.status).json(result))
}