const mongoose = require("mongoose");

const committee_post = new mongoose.Schema({
    committee_post_Name: {
        type: String,
        required: true,
    },
    ts: {
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("CommitteeDetails", committee_post);
