const express=require("express")
const router=express.Router()
const contactController=require("../Controller/contactController")
const contactValidation=require("../validators/contactValidators")
const validate=require("../middleware/validateMiddleware")

router.post("/contact",validate(contactValidation.contactSchema),contactController.contactForm)

module.exports=router;