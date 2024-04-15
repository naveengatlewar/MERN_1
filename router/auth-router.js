// is a complete middleware and routing systen; for this reasons, it is often refered to as a  "mini-app".

const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth-controller");


router.route("/").get(authControllers.home);

const signupSchema = require("../validators/auth-validators");
const validate = require("../middleware/validate-middleware");


router.route("/register").post( validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);



module.exports = router;