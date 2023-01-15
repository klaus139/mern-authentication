import mongoose from "mongoose";

export const connect = () => {
    mongoose.set('strictQuery', false);
    try{
        mongoose.connect(process.env.MONGO);
        console.log('connected to mongoDB'.cyan.underline);
    } catch(error){
        throw error;
    }
    mongoose.connection.on('disconnected',()=>{
        console.log('mongodb disconnected');
    })
};

