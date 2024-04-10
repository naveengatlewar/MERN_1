// is a complete middleware and routing systen; for this reasons, it is often refered to as a  "mini-app".

const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth-controller");


router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);


module.exports = router;