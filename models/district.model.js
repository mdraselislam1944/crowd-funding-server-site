const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    distName: {
        type: String,
        required: true,
    },
    ts: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("district", districtSchema);
