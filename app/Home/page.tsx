"use client"
import { Post } from "@/types/Post"
import Createnewpost from "../component/createnewpost";
import Deletepost from "../component/deletepost";
import Editpost from "../component/editpost";
import AuthCheck from "../component/authCheck";
import Logout from "../component/logout";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts,setPosts] = useState<Post[]>([])

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    async function FPost() {
      const res = await fetch(`/api/posts?userId=${userId}`)
      const data = await res.json()

      setPosts(data)
    }
    FPost()
  }, [])

  return (
    <div className="layout-page">
      <AuthCheck />
      <Logout />
      <div className="box-user">
        <h1> Posts </h1>
        {posts.map((post, index) => (
          <ul key={post._id} >
            <li>
              <p>Post no. {index + 1}</p>
              <p>Title : {post.title}</p>
              <p>Description : {post.content}</p>
              <p>Address : {post.address}</p>
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
