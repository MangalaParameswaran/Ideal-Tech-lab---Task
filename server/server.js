import express from 'express'
import cors from'cors'
import colors from 'colors'
import dotenv from 'dotenv'
import mongoose from './src/model/dbConnection.js'
import router from './src/routes/index.js'


const app=express();

app.use(cors())
app.use(express.json())
app.use('/',router)

let PORT=process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`App is Listening Dude ${PORT}`.bgMagenta);
})