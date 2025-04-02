const express = require("express");
const logger = require("../utils/logger");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(logger.getProcessLog("Application is shutting down..."));
    res.send("Shutting down...");
    process.exit();
});

module.exports = router;
