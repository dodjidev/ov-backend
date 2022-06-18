const User = require('../models/user.mdl')


exports.list = (req, res) => {

    onRequest(res, User.find(), 200)
}

exports.store = (req , res) => {
    let data = req.body;
    delete data._id;
    let user = new User(data);
    onRequest(res, user.save() , 201 )
}

exports.update = (req, res) => {
     let _id = req.params.id;
     onRequest(res, User.updateOne({_id} , {...req.body}) , 201)
}

exports.show = (req, res) => {
    let _id = req.params.id;
    onRequest(res, User.findById(_id))
}

exports.delete = (req, res) => {
    let _id = req.params.id;
    onRequest(res, User.deleteOne({_id}))
}

exports.filter = (req, res) => {
    let filterCriterias = req.body;
    console.log("filterCriterias:", filterCriterias)
    for(key in filterCriterias)
      if(filterCriterias[key] == '') delete filterCriterias[key]
 
    if(filterCriterias.tags){
        filterCriterias.tags = {"$regex": filterCriterias.tags , "$options": "i"}
    }

    if(filterCriterias.colors)
       filterCriterias.colors = {"$regex": filterCriterias.colors , "$options": "i"}

    onRequest(res, User.find(filterCriterias))
}

exports.login = (req , res)=>{
    delete req.body._id;
    User.findOne({phone: req.body.phone , password: req.body.password}).then(result =>{
        return {result , error: false , status:200}
    })
    .catch(err => ({result: false , error: err.message , status: 500}))
    .then( result => {
        
        res.status(result.status).json(result)
    })
}


const onRequest = (res ,  promise , status = 200 , onFinish) =>{
    promise
        .then(result =>{
            if(typeof onFinish == "function") onFinish();
            return {result , error: false , status}
        })
        .catch(err => ({result: false , error: err.message , status: 500}))
        .then( result => {
            
            res.status(result.status).json(result)
        })
}