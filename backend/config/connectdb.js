/* const mongoose=require('mongoose')
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
module.exports= connectdb; */
const mongoose = require("mongoose");
const connectddb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kamikaze:Ja2hzpzdujtSD3DG@cluster0.8mco3.mongodb.net/mycontactList?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectddb;
