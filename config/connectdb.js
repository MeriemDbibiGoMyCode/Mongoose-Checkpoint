const mongoose=require('mongoose')
require('dotenv').config()
const connectdb= async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log('you are connected')
    }
    catch(err){
        console.log(err)
    }
}

module.exports= connectdb;