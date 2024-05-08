// 2) second we make Router using express js for handle the get and post request. 

const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");


router.route("/contact").post(contactForm);


module.exports = router;