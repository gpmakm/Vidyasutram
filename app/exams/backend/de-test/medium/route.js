import { NextResponse,NextRequest } from "next/server";
import question from '../../../../../public/Files/digital_electronics_mcqs_medium.json';
export async function POST(request){
    const data=await request.json();
    if (!data) {
        return NextResponse.json({message:'No data received'}, {status:400});
    } else{
        return NextResponse.json({message:'Data received successfully',data:data}, {status:200});
    }

}