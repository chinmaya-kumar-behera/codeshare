const express = require("express");
const { getCode, createCode } = require("../controller/urlController");


const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('API is working fine !')
})

Router.get("/:id", getCode);
Router.post("/", async(req, res) => {
    console.log("hello sir i am chinmaya kumar behera")
    console.log(req.body)
    res.send({data:req.body});
});
Router.post("/:id", createCode);

module.exports = Router