import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const user = await User.findOne({username: body.username})

    if(!user) {
        return Response.json(
            {message: "Username not found"},
            {status: 401}
        )
    }

    if(user.password !== body.password) {
        return Response.json(
            {message: "Password incorrect"},
            {status: 401}
        )
    }

    return Response.json({
        message: "Login success",
        userId: user._id
    }
    )
}