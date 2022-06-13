const express = require('express');
const app = express();
const configs = require('./configs');
const mongoose = require('mongoose');
const serviceRoute = require('./routes/service.rt')
const serviceTypeRoute = require('./routes/serviceType.rt')
const { sendMensageToDevice }= require('./services/firebase')

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

app.get('/', (req, res)=>{
    res.status(200).json({message: "Well done !!!", port: configs.SERVER_PORT});
})

app.use('/services', serviceRoute)
app.use('/service-types', serviceTypeRoute)

mongoose.connect(configs.MONGOOSE_URI) 
    .then(res => {
        console.log('successfuly connected to mongoose !!!')
        app.listen( process.env.PORT || configs.SERVER_PORT , ()=> console.log('server started successfully !!')); //
        sendMensageToDevice()
    }).catch(err => console.log('mongoose connection error:'+err.message))


//app.listen( process.env.PORT || configs.SERVER_PORT , ()=> console.log('server started successfully !!')); //

