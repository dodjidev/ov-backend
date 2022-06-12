const Product = require('../models/product.mdl')

exports.list = (req, res) => {
    let query = req.query;
    console.log(query)
    for(key in query)
       if(query[key] == '') delete query[key]
    
    if(query.tags){
        query.tags = {"$regex": query.tags , "$options": "i"}
    }
      
    console.log(query)
    if(query.colors)
      query.colors = {"$regex": query.colors , "$options": "i"}

    onRequest(res, Product.find(query))
}

exports.store = (req , res) => {
    let data = req.body;
    delete data._id;
    let product = new Product(data);
    onRequest(res, product.save() , 201)
}

exports.update = (req, res) => {
     let _id = req.params.id;
     onRequest(res, Product.updateOne({_id} , {...req.body}) , 201)
}

exports.show = (req, res) => {
    let _id = req.params.id;
    onRequest(res, Product.findById(_id))
}

exports.delete = (req, res) => {
    let _id = req.params.id;
    onRequest(res, Product.deleteOne({_id}))
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

    onRequest(res, Product.find(filterCriterias))
}


const onRequest = (res ,  promise , status = 200) =>{
    promise
        .then(result => ({result , error: false , status}))
        .catch(err => ({result: false , error: err.message , status: 500}))
        .then( result => res.status(result.status).json(result))
}