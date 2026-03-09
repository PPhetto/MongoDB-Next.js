"use client"
import { FormEvent, useState } from "react"
export default function Createnewpost() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    async function hsummid(e:FormEvent) {
      e.preventDefault();

      const res = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            content
          })
      })

      setTitle("")
      setContent("")

      // location.reload()
    }
    
  return (
    <form onSubmit={hsummid}>
        <input
            value={title}
            placeholder="Title name"
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            value={content}
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
            Create
        </button>
    </form>
  )
}
