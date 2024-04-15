const express=require("express")
const router=express.Router()
const serverController=require("../Controller/serviceController")

router.get("/service",serverController.service)

module.exports=router;