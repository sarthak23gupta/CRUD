const express=require('express')
const path=require('path')

const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT;

const app=express()
const connectDB = require('./db/db');
app.use(express.json());
const router=require('./routers/joke.router.js')


connectDB();
app.use('/',router)

// app.get((req,res)=>{
//     res.send("Helloooo")
// })

app.listen(PORT,()=>{
    console.log(`http:localhost:`+PORT);
})



