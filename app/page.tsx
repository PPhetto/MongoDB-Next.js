import { Post } from "@/types/Post"
import Createnewpost from "./component/createnewpost";
import Deletepost from "./component/deletepost";
import Editpost from "./component/editpost";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts", {
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
              <div className="layout-bbt">
                <div>
                  <Editpost id={post._id} title={post.title} content={post.content}/>
                </div>
                <div>
                  <Deletepost id={post._id} />
                </div>
              </div>
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
