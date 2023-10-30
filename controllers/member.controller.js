const member = require('./../models/members.model');

const getMember = async (req, res) => {
    try {
        const result = await member.aggregate([
            {
                $match: {
                    bcsCadre: { $ne: "" }
                }
            },
            {
                $group: {
                    _id: "$bcsCadre",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

const setMember = (req, res) => {
    const id = req.params.id;
    console.log(id);
}


const updateProfileMember = async (req, res) => {
    try {
        const result = await member.find({}).sort({ updateDate: -1 }).limit(20);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

module.exports = { getMember, setMember,updateProfileMember };
