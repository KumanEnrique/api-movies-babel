import express from "express";
module.exports = app =>{
    app.set('port',process.env.PORT || 3000)
    app.use(express.urlencoded({extended:true}));
    app.use(express.json() )
}