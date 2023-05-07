const mongoose=require('mongoose');
const doctorsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        unique: true
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[4,"please set a password of atleaset 4 characters"],
    },
})
const doctors=new mongoose.model("Doctors",doctorsSchema);
module.exports=doctors;