const express=require('express');
const router=require('./routes/router')
const bodyParser=require('body-parser');
const passport=require('passport');
const passportStrategy=require('./config/passport')
const app =express();
const port=8000;
const db=require('./config/mongoose') 

//setting the app
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(router);

//home function
app.get('/',function(req,res){
    res.send("hello")
})


//listening the port
app.listen(port,function( req,res){
    console.log("Server connected succesfully")
    
})