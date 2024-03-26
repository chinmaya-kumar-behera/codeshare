const express = require("express");
const { getCode, createCode } = require("../controller/urlController");


const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('API is working fine !')
})

Router.get("/:id", getCode);
Router.post("/:id", createCode);

module.exports = Router