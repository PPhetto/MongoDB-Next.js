import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post"
import mongoose from "mongoose";

export async function GET(req: Request) {
    await connectDB()

    const { searchParams } = new URL(req.url)

    const userId = searchParams.get("userId")

    if(!userId) {
        return Response.json()
    }

    const posts = await Post.find({
        user: new mongoose.Types.ObjectId(userId)
      })

    return Response.json(posts)
}

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    console.log(body)
    console.log("USERID:", body.userId)

    const post = await Post.create({
        title: body.title,
        content: body.content,
        address: body.address,
        user: new mongoose.Types.ObjectId(body.userId)
    })

    return Response.json(post)
}

export async function DELETE(req: Request) {
    await connectDB()

    const body = await req.json()

    const deletePost = await Post.findByIdAndDelete(body.id)

    return Response.json(deletePost)
}

export async function PUT(req: Request) {
    await connectDB()

    const body = await req.json()

    const editPost = await Post.findByIdAndUpdate(
        body.id,
        {
            title: body.title,
            content: body.content
        },
        {
            new: true
        }
    )

    return Response.json(editPost)
}
