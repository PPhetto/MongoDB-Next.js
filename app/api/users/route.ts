import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
    await connectDB()

    const Users = await User.find()

    return Response.json(Users)
}

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const used = await User.findOne({username: body.username})

    if(used) {
        return Response.json(
            {message: "Username already used"},
            {status: 400}
        )
    }

    const user = await User.create({
        username: body.username,
        password: body.password
    })

    return Response.json(user)
}