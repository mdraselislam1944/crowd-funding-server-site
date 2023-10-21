const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    createdOn:{
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model("users",userSchema);
