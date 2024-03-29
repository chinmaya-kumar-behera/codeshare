const express = require("express");
const { getCode, createCode } = require("../controller/urlController");


const AppRouter = express.Router();

AppRouter.get('/', (req, res) => {
    res.send('API is working fine !')
})

AppRouter.get("/:id", getCode);
AppRouter.post("/", async(req, res) => {
    console.log("hello sir i am chinmaya kumar behera")
    console.log(req.body)
    res.send({data:req.body});
});
AppRouter.post("/:id", createCode);

module.exports = AppRouter;