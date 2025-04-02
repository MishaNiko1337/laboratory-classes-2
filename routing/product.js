const express = require("express");
const path = require("path");
const fs = require("fs");
const { STATUS_CODE } = require("../config");
const renderNewProductPage = require("../views/renderNewProductPage");
const router = express.Router();

router.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

router.post("/add", (req, res) => {
    fs.writeFile("product.txt", req.body.product, () => {
        res.status(STATUS_CODE.FOUND).setHeader("Location", "/product/new").end();
    });
});

router.get("/new", (req, res) => {
    fs.readFile("product.txt", (err, data) => {
        if (err) {
            return res.send(renderNewProductPage("No product found"));
        }
        res.send(renderNewProductPage(data.toString()));
    });
});

module.exports = router;

