const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true,
    },
    ts: {
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("departments", departmentSchema);
