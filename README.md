# HospitalApi
Hosted Link--https://hospitalapi-leeh.onrender.com/

you can have a look how the api is working by going through the routes in POSTMAN app

 /doctors/register--for registering a doctor(post method)
 /logIn---for logging in of the doctor(post method)
 /patients/register--for registering a patient(you also need to provide the bearer token here to authenticate the doctor)(post method)
 
 /patients/:id/create_report--for creatiing report(here also you would need to provide the bearer token)(post method)
 
 /patients/:id/all_reports---to get all the reports of a perticular patient(get method)
 
 /reports/:status---to show the reports according to the status of the patient(get method)
