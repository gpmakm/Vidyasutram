import { NextResponse } from "next/server";
export default async function POST(req){
    const name=await req.json();
    console.log(name);
    return NextResponse.json({message:"Data received successfully"});
}