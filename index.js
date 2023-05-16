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
    const apiRoutes = `
    you can have a look at how the API is working by going through the routes in the POSTMAN app:<br>

    /doctors/register - for registering a doctor (POST method)<br>
    
    /logIn - for logging in of the doctor (POST method)<br>
    
    /patients/register - for registering a patient (you also need to provide the bearer token here to authenticate the doctor) (POST method)<br>
    
    /patients/:id/create_report - for creating a report (here also you would need to provide the bearer token) (POST method)<br>
    
    /patients/:id/all_reports - to get all the reports of a particular patient (GET method)<br>
    
    /reports/:status - to show the reports according to the status of the patient (GET method)
  `;
  
  res.send(apiRoutes);
})


//listening the port
app.listen(port,function( req,res){
    console.log("Server connected succesfully")
    
})