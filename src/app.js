const express = require('express');
const app = express();
const configs = require('./configs');
const mongoose = require('mongoose');
const productRouter = require('./routes/product.rt')

mongoose.connect("mongodb+srv://dadev:Mw4NsmQlClFsnALr@jrcluster.hllujh9.mongodb.net/Products?retryWrites=true&w=majority") //configs.MONGOOSE_URI
    .then(res => {
        console.log('successfuly connected to mongoose !!!')
        app.listen( process.env.PORT || 8500, ()=> console.log('server started successfully !!')); //configs.SERVER_PORT
    }).catch(err => console.log('mongoose connection error:'+err.message))

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

app.get('/', (req, res)=>{
    res.status(200).json({message: "Well done !!!"});
})

app.use('/products', productRouter)

