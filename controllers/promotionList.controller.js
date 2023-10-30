const { json } = require("express");
const promotionList = require("../models/promotionList.model");

const getAllPromotionList=async(req,res)=>{
    try{
        const result= await promotionList.find();
        res.status(200).send({ status: "success", data: result });
    }catch(error){
        res.status(404).json({message:`something is wrong ${error}`});
    }
}

module.exports={getAllPromotionList};