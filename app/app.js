//add express library
const express = require('express');
const todosRouter = require('../router/todosRouter');
//create request listener
const app = express();
app.get("/",(req,res,next)=>{
    res.status(200).json({message:"Service is up and running"});
});
//router middleware
app.use("/todos",todosRouter);

//add middleware to handle errors and bad url paths
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message:error.message,
            status:error.status,
            method:req.method,
        }
    });
});


//export app
module.exports = app;
