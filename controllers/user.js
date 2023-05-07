const Doctor=require('../models/doctors');
const Patient = require('../models/patients');
const jwt=require('jsonwebtoken');


//registering the doctor
module.exports.registerDoctor=async(req,res,next)=>{
    try{
        const dotcor=await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created successfully"
        });

    }catch(err){
        res.status(500).json({
            success:false,
            message:"could not create doctor"
        })
    }
}

//logging in of the doctor
module.exports.logIN = async (req, res, next) => {
    try {
      const user = await Doctor.findOne(req.body).exec();
      if (user) {
        const payload = { userId: user.id };
        const token = jwt.sign(payload, 'secret');
        res.status(200).json({
          success: true,
          token,
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid credentials',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to log in',
      });
    }
  };

  //registering the patient
module.exports.registerPatient=async(req,res,next)=>{
    try {
       req.body.doctor="64560bfdbd99a2bb43adb316";
        const patient=await Patient.create(req.body);
        res.status(200).json({
        success:true,
        message:"successfully created patient details",
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to create patient details",
        });
    }
}

//generating patient report
module.exports.patientReport=async(req,res,next)=>{
    try {
        const patient= await Patient.findById(req.params.id);
        req.body.Date=Date.now();
        patient.report.push(req.body);
        patient.save();
        res.status(200).json({
            success:true,
            message:"successfully generated the report"
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"patient report could not be created"
        })
    }
}

//showing all the reports of the patient
module.exports.allreports=async (req,res,next)=>{
    try {
        const patient= await Patient.findById(req.params.id);
        res.status(200).json({
            success:true,
            reports:patient.report
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"all reports generation failed"
        })
    }
}

//sorting the reports accoding to the status
module.exports.showStatus=async(req,res,next)=>{
    try {
        const patient= await Patient.find({
            report:{$elemMatch:{status:req.params.status}},
        })
        res.status(200).json({
            success:true,
            requiredreports:patient
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"status could not be shown"
        })
    }
}