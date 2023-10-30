const requestMember = require('./../models/JUBOF_Mem_Request.model');
const { json } = require("express");

const getRequestMember = async (req, res) => {
    try {
        const result = await requestMember.find({ Enabled_On: 'pending' });
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

const setRequestMember = async (req, res) => {
    try {
        const data = req.body;
        const saveData = new requestMember(data);
        await saveData.save();
        // res.status(201).json(saveData);
        res.status(201).json({ status: "success", data: saveData });

    } catch (error) {
        res.status(404).json({ message: `something is wrong ${error}` });
    }
}

const updateRequestMember = async (req, res) => {
    try {
        const {_id,Enabled_On} = req.body;

        if (!_id) {
            return res.status(400).json({ message: 'you are not valid' });
        }
        const updatedMember = await requestMember.findOneAndUpdate({ _id: _id }, { Enabled_On:Enabled_On},{ new: true });
        if (!updatedMember) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ status: "success", data: updatedMember });
    } catch (error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

const checkStatusForLogIn=async(req,res)=>{
    const Phn_Number=req.params.id;
    try{
        const result=await requestMember.findOne({Phn_Number:Phn_Number}).select({Enabled_On:1});
        res.status(200).json({ status: "success", data: result });
    }catch(error){
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

module.exports = { getRequestMember, setRequestMember,updateRequestMember,checkStatusForLogIn};