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
