// require('dotenv').config();
const express=require("express")
const app=express();
const PORT=7000;
const cors=require("cors");
const path = require("path");
const router=require("./Router/authRouter")
const contactRoute=require("./Router/contactRoute")
const serviceRoute=require("./Router/serviceRoute")
const adminRoute=require("./Router/adminRoute")
const connectToDb=require("./config/db");
const errorMiddleware = require('./middleware/errorMiddleware');

connectToDb();
app.use(cors())
app.use(express.json())
app.use("/api/auth", router)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/admin", adminRoute)

app.use(errorMiddleware);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });

app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`)
})
