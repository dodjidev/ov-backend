const express = require('express');

const app = express();

app.get('/' , (req, res)=>{
    res.status(200).json({message: "Welcome to ov-backend service"});
})


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('app started listening...');
})