const path = require("path");

const express = require("express");

const connection = require("../util/database");

const shopController = require("../controller/shop");

const router = express.Router();

const mysql = require("mysql2");

connection.connect();

router.get("/", shopController.getIndex);

router.get("/product", shopController.getProuct);

router.get("/product/:productId", shopController.getDetail);

module.exports = router;
