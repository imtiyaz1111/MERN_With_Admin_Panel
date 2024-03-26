require('dotenv').config();
const express=require("express")
const app=express();
const PORT=process.env.PORT || 7000;
const cors=require("cors");
const router=require("./Router/authRouter")
const contactRoute=require("./Router/contactRoute")
const serviceRoute=require("./Router/serviceRoute")
const adminRoute=require("./Router/adminRoute")
const connectToDb=require("./config/db");
const errorMiddleware = require('./middleware/errorMiddleware');

connectToDb();
app.use(cors(
    {
        origin:[''],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(express.json())
app.use("/api/auth", router)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/admin", adminRoute)

app.use(errorMiddleware);



app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`)
})
