import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

mongoose.connect('mongodb+srv://mangala214128pa:maggi12@cluster0.u3upwel.mongodb.net/idealTech').then(()=>{
    console.log('MongoDB is connected'.bgRed)
}).catch((err)=> console.log(err))

export default mongoose