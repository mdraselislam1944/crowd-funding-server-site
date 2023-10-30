const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    Full_Name: {
        type: String,
        required: true,
    },
    Nick_Name: {
        type: String,
        required: true,
    },
    Phn_Number: {
        type: String,
        required: true,
        unique: true,
    },
    EMail: {
        type: String,
        required: true,
        unique: true,
    },
    Permanent_Address: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
    },
    JU_Batch: {
        type: String,
        required: true,
    },
    JU_Dept: {
        type: String,
        required: true,
    },
    JU_Hall: {
        type: String,
        required: true,
    },
    BCS_Batch: {
        type: String,
        required: true,
    },
    BCS_Dept: {
        type: String,
        required: true,
    },
    BCS_CUrrent_Posting: {
        type: String,
        required: true,
    },
    Cr_Date: {
        type:Date,
        default:Date.now,
    },
    Updt_Date: {
        type:Date,
        default:Date.now,
    },
    Apprvd_By:{
        type:String,
        default:"",
    },
    Approvd_On:{
        type:Date,
        default:"",
    },
    JUSession:{
        type:String,
        default:"",
    },
    Enabled_On:{
        type:String,
        default:"pending",
    },
},
{
    collection: "JUBOF_Mem_Request"
});

module.exports = mongoose.model("JUBOF_Mem_Request",requestSchema);
