import { NextResponse } from "next/server";
export  async function POST(req){
    const {appname,user}=await req.json();
    console.log(appname + user);
    return NextResponse.json({message:"Data received successfully"});
}