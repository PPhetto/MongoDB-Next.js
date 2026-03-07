import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post"

export async function GET() {
    await connectDB()

    const posts = await Post.find()

    return Response.json(posts)
}

export async function POST(req: Request) {
    await connectDB()

    const body = await req.json()

    const post = await Post.create({
        title: body.title,
        content: body.content
    })

    return Response.json(post)
}