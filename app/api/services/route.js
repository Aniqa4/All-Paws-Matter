import {Services} from "@/lib/model/services";
import {connectionSrt} from "@/lib/db"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionSrt)
    const data = await Services.find()
    console.log(data);
    return NextResponse.json(data)
}

/* export async function POST(){
    await mongoose.connect(connectionSrt);

} */