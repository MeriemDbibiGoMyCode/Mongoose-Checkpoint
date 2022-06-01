const mongoose=require('mongoose')

//Création Schema
const contactSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports=mongoose.model('testcontact',contactSchema)