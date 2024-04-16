const mongoose=require("mongoose")
const DB="mongodb://imtiyazalam:imtiyazalam@ac-osmbmim-shard-00-00.oplf40u.mongodb.net:27017,ac-osmbmim-shard-00-01.oplf40u.mongodb.net:27017,ac-osmbmim-shard-00-02.oplf40u.mongodb.net:27017/MernWithAdmin?ssl=true&replicaSet=atlas-tfer3k-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectToDb=async  ()=>{
    mongoose.connect(DB)
    .then(()=>{
        console.log("connection successfully");
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

module.exports=connectToDb;

