const express=require('express')
const connectdb=require('./config/connectdb')
const contactRouter=require('./route/contact')
const app=express()
require('dotenv').config()
//const port=process.dotenv.port
const port=5000
connectdb()
app.use(express.json())
app.use('/api/contact',contactRouter)

app.listen(process.env.port,err=>{
    err?console.log(err):console.log('you did it, go to ${process.env.port}')
})