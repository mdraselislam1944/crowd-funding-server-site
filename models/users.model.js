const mongoose=require("mongoose");

const JUBOF_Users=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"member",
    },
    createdOn:{
        type:Date,
        default:Date.now,
    }
},
{
    collection: "JUBOF_Users"
});

module.exports=mongoose.model("JUBOF_Users",JUBOF_Users);
