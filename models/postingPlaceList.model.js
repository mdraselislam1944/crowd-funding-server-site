const mongoose = require("mongoose");

const promotionListSchema = new mongoose.Schema({
    // _id: {
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // },
    createDate: {
        type: Date,
        default: Date.now,
    },
    dateShow: {
        type: String,
    },
    fname: {
        type: String,
    },
    name: {
        type: String,
    },
    photoPath: {
        type: String,
    },
    username: {
        type: String,
    },
    designation: {
        type: String,
    },
    newPostPlace: {
        type: String,
    },
    newPostDist: {
        type: String,
    },
    oldPostPlace: {
        type: String,
    },
    oldPostDist: {
        type: String,
    },
    ts: {
        type: Date,
        default: Date.now,
    },
},
{
    collection: "postingPlaceList"
});

module.exports = mongoose.model("postingPlaceList", promotionListSchema);
