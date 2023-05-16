const express=require('express');
const passport=require('passport')
const jwt=require('../config/passport')
const {registerDoctor, registerPatient, patientReport, allreports, showStatus, logIN}= require('../controllers/user');
const router=express.Router();
router.post('/doctors/register',registerDoctor);
router.post("/logIn",logIN);
router.post('/patients/register',passport.authenticate('jwt', { session: false }),registerPatient);
router.post("/patients/:id/create_report",passport.authenticate('jwt', { session: false }),patientReport);
router.get("/patients/:id/all_reports",allreports);
router.get("/reports/:status",showStatus);

module.exports=router;
