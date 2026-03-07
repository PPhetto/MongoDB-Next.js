import { Post } from "@/types/Post"
import Createnewpost from "./component/createnewpost";

export default async function Home() {
  const res = await fetch("/api/posts", {
    method: "GET",
    cache: "no-store"
  })
  const posts: Post[] = await res.json()

  return (
    <div className="layout-page">
      <div className="box-user">
        <h1> Posts </h1>
        {posts.map((post, index) => (
          <ul key={post._id} >
            <li>
              <p>Post no. {index + 1}</p>
              <p>Title : {post.title}</p>
              <p>Description : {post.content}</p>
            </li>
          </ul>
        ))}
      </div>
      <div className="box-user">
        <ul>
          <li>
            <Createnewpost />
          </li>
        </ul>
      </div>
    </div>
  );
}
