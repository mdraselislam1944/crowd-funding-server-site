const mongoose = require("mongoose");
const jubof_members = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: false,
    },
    bdate: {
        type: Date,
        required: true,
    },
    bcsBatch: {
        type: Number,
        required: true,
    },
    bcsCadre: {
        type: String,
        required: true,
    },
    postingPlace: {
        type: String,
        required: true,
    },
    postingDept: {
        type: String,
        required: true,
    },
    postingDist: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    mobile1: {
        type: Number,
        required: true,
    },
    mobile2:{
        type:Number,
        required:false,
    },
    email:{
        type:String,
        required:true,
    }, 
    facebook:{
        type:String,
        required:false,
    },
    hDistrict:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:false,
    },
    hall:{
        type:String,
        required:false,
    },
    bloodGroup:{
        type:String,
        required:false,
    },
    photoPath:{
        type:String,
        required:false,
    },
    ts:{
        type:Date,
        default:Date.now,
    },
    updateDate:{
        type:Date,
        default:"",
    }
},{
    collection:"jubof_members",
});

module.exports=mongoose.model("jubof_members",jubof_members);