const express=require("express")
const router=express.Router();
const adminController=require("../Controller/adminController")
const authMiddleware=require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/users",authMiddleware,adminMiddleware,adminController.getAllUsers)
router.get("/contacts",authMiddleware,adminMiddleware,adminController.getAllContacts)
router.delete("/users/delete/:id",authMiddleware,adminMiddleware,adminController.deleteUserById)
router.get("/users/:id",authMiddleware,adminMiddleware,adminController.getUserById)
router.patch("/users/update/:id",authMiddleware,adminMiddleware,adminController.updateUserById)
router.delete("/contacts/delete/:id",authMiddleware,adminMiddleware,adminController.deleteContactById)

module.exports=router;