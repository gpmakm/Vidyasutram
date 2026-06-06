import { NextResponse } from "next/server";
import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DBLINK2);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
const datachema=new mongoose.Schema({
    appname:String,
    user:String
})
const data=mongoose.model('data',datachema)

export  async function POST(req){
    await connectToDB();
    const {appname,user}=await req.json();
    console.log(appname + user);
    let d=new data({
        appname:appname,
        user:user
    })
    try{
        await d.save().then(()=>{console.log("Data Saved!!");
    }).catch((err)=>{console.error(err)});
    return NextResponse.json({message:"Data received successfully"});
    }
    catch(err){
        console.error(err);
        return NextResponse.json({message:"Error saving data"}, {status:500});
    }
}