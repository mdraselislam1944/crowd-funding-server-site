require("dotenv").config();

const dev={
    app:{
        port:process.env.PORT||5000
    },
    db:{
        url:`mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster0.kiau8tk.mongodb.net/JUBOFDB`||"mongodb://localhost:27017/PracticeDB",
    }
};

module.exports =dev;

    