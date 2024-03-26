const User = require("../models/userModel");
const bcrypt=require("bcryptjs")

///////Home............
const home=async(req,res)=>{
    try {
        res.status(200).send("welcome to mern project")
    } catch (error) {
      next(error)
    }
}

///////Register............
const register = async (req,res) => {
    const { username, email, phone, password } = req.body;
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(422).json({ message: "Email already Exist" });
      } else {
        //pasword hash
      const saltRound = 10;
      const hash_password = await bcrypt.hash(password, saltRound);
        const user = new User({
          username,
          email,
          phone,
          password: hash_password,
        });
        const userResgister = await user.save();
        if (userResgister) {
          res
          .status(202)
          .json({
            message: "user register successfully",
            token: await userResgister.generateAuthToken(),
            userId: userResgister._id.toString(),
          });
        } else {
          res.status(500).json({ error: "Faild Register" });
        }
      }
    } catch (error) {
      // console.log( error)
      next(error)
    }
  };
  
///////login............
const login=async(req,res)=>{
  try {
    const {email,password}=req.body; 
    const userExit=await User.findOne({email:email});
    if(!userExit)
    {
      return res.status(400).json({message: "Invalid Credentials email or password"})
    }
    const user= await bcrypt.compare(password,userExit.password)
    if(user){
      res
      .status(200)
      .json({
        message: "user login successfully",
        token: await userExit.generateAuthToken(),
        userId: userExit._id.toString(),
      });
    }
    else
    {
      return res.status(400).json({message: "Invalid Credentials email or password"})
    }
  } catch (error) {
    next(error)
  }
}

///////user data getting............
const user= async(req,res)=>{
  try {
    const userData= req.user;
    console.log(userData)
    return res.status(200).json({userData})
  } catch (error) {
    console.log(`error from the user route ${error}`)
  }
}

module.exports={home,register,login,user}