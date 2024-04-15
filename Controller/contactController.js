const Contact=require("../models/contactModel")

const contactForm= async(req, res) => {
    try {
       const {username,email,message}=req.body;
       const contact= new Contact({username,email,message})
       const contactfill= await contact.save()
       if(!contactfill)
       {
        return res.status(500).json({message:"message not deliverd"});
       }
       else{
        return res.status(200).json({message:"message send successfully"});
       }
    } catch (error) {
        next(error)
    }
  };

  module.exports={contactForm};