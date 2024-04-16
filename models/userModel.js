const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//we are genera ting token
userSchema.methods.generateAuthToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
       JFFHJFHOADRJEWJRIONCSCNVJDDJFFJSFFJFOIWEWFWEFMFNSDFLEWIF,
        {
            expiresIn:"30d",
        }
        )
    } catch (error) {
        console.log(error)
    }
}

const User =mongoose.model("User",userSchema);
module.exports=User;
