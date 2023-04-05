const dataJson = require("../jsondata.json");
const { data } = require('../models/data');
const {mongoose} = require('../db');



const start = async() =>{
    try{
        await data.create(dataJson);
        console.log("success");
    }catch(err){
        console.log(err);
    }
}

start();
