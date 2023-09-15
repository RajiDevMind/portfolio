const express = require("express");
const router = express.Router();

const { mail } = require("../controller/mail");

router.post("/subscribe", mail);
// router.route("/").post(mail);

module.exports = router;
