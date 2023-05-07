const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your patient's name"],
        unique: true,
    },
    phone:{
        type:Number,
        required:[true,"please enter your patient's phone number"],
        unique: true,
    },
    report:[
        {
            status:{
                type:String,
                enum:["Negative", "Travelled-Quarantine", "Symptoms-Quarantine","Positive-Admit"],
                required:true,

            },
          Date:{
            type:Date,
            required:true,
          },
        },
    ],
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true,
    }
});
const patients=new mongoose.model("Patients",patientSchema);
module.exports=patients;