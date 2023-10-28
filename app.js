const express = require('express');
const cors = require('cors');
require("./config/DB");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//users routed 
const userRouter = require('./routes/user.route');
app.use("/api", userRouter);

//members route
const memberRoute=require("./routes/members.route");
app.use("/api",memberRoute);

//requestMember
const requestMember=require("./routes/JUBOF_Mem_Request.route");
app.use("/api",requestMember);

//authentication
const {authenticationRouter}=require("./helper/Authorization.route");
app.use("/api/authentication",authenticationRouter);

//promotionList route
const promotionList=require("./routes/promotionList.route");
app.use('/api',promotionList);

//postingPlaceList
const postingPlaceList=require("./routes/postingPlaceList.route");
app.use('/api',postingPlaceList);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
