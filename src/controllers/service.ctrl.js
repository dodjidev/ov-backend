const Service = require('../models/service.mdl')
const { sendMensageToDevice } = require('../services/firebase/') ;

exports.list = (req, res) => {
    let query = req.query;
    console.log(query)
    for(key in query)
       if(query[key] == '') delete query[key]
    
    if(query.tags){
        query.tags = {"$regex": query.tags , "$options": "i"}
    }
      
    console.log(query)

  
    onRequest(res, Service.find(query), 200)
}

exports.store = (req , res) => {
    let data = req.body;
    delete data._id;
    data.reference = "PRS-"+(new Date()).getTime();
    let service = new Service(data);
    const callback = ()=>{
        sendMensageToDevice("Nouvelle demande" , "Nouvelle demande de prestation réçu. reference "+data.reference)
    }
    onRequest(res, service.save() , 201 , callback)
}

exports.update = (req, res) => {
     let _id = req.params.id;
     onRequest(res, Service.updateOne({_id} , {...req.body}) , 201)
}

exports.show = (req, res) => {
    let _id = req.params.id;//sendMensageToDevice
    onRequest(res, Service.findById(_id))
}

exports.delete = (req, res) => {
    let _id = req.params.id;
    onRequest(res, Service.deleteOne({_id}))
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

    onRequest(res, Service.find(filterCriterias))
}


const onRequest = (res ,  promise , status = 200 , onFinish) =>{
    promise
        .then(result => ({result , error: false , status}))
        .catch(err => ({result: false , error: err.message , status: 500}))
        .then( result => {
            if(typeof onFinish == "function") onFinish();
            res.status(result.status).json(result)
        })
}