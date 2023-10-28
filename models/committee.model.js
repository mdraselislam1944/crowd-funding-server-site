const mongoose = require("mongoose");

const committeeSchema = new mongoose.Schema({
    committee_year: {
        type: String,
        required: true,
    },
    committee_post: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    posting: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number, 
        required: true,
    },
    photoPath: {
        type: String,
        required: true,
    },
    ts: {
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("Committee", committeeSchema);
