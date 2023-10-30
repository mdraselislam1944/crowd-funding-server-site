const postingPlaceList=require('./../models/postingPlaceList.model');

const getPostingPlaceList=async(req,res)=>{
    try{
        const result=await postingPlaceList.find();
        res.status(200).send({ status: "success", data: result });
    }catch(error){
        res.status(404).json({message:`something is wrong ${error}`});
    }
}

module.exports={getPostingPlaceList};