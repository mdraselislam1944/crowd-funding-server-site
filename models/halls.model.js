const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
    hallName: {
        type: String,
        required: true,
    },
    ts: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("halls", hallSchema);
