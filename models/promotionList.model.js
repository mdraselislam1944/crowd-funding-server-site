const mongoose=require("mongoose");

const promotionListSchema=new mongoose.Schema({
    createDate:{
        type:Date,
        default:Date.now,
    },
    dateShow:{
        type:Date,
    },
    fname:{
        type:String,
    },
    name:{
        type:String,
    },
    photoPath:{
        type:String,
    },
    userName:{
        type:String,
        required:true,
    },
    newDesig:{
        type:String, 
    },
    oldDesig:{
        type:String, 
    },
    ts:{
        type:Date,
        default:Date.now,
    },    
},
{
    collection: "promotionList"
});

module.exports=mongoose.model("promotionList",promotionListSchema);
