require("dotenv").config();

const dev={
    app:{
        port:process.env.PORT||5000
    },
    db:{
        url:`mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster11.cpm08j1.mongodb.net/crowdFundingDB`||"mongodb://localhost:27017/crowdFundingDB",
    }
};

module.exports =dev;