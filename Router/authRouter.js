const express=require("express")
const router=express.Router();
const authController=require("../Controller/authController")
const authValidators=require("../validators/authValidators")
const validate=require('../middleware/validateMiddleware');
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",authController.home)
router.post("/register",validate(authValidators.sigupSchema),authController.register)
router.post("/login",validate(authValidators.loginSchema),authController.login)
router.get("/user", authMiddleware ,authController.user)

module.exports=router;