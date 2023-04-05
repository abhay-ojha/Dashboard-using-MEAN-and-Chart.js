const data = require("../models/data")

const getAllData = async(req,resp) => {
    const myData = await data.find({});
    resp.status(200).send(myData);
};

module.exports = getAllData;