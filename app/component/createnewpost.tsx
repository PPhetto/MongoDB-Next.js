"use client"
import { FormEvent, useState } from "react"
export default function Createnewpost() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [address,setAddress] = useState("")

    async function hsummid(e:FormEvent) {
      e.preventDefault();

      if(!address || !title) {
        alert("Please")
        return
      }

      const res = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            content,
            address,
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
        <input
          value={address}
          placeholder="address"
          onChange={(a) => {
            setAddress(a.target.value)
          }}
        />
        <button type="submit">
            Create
        </button>
    </form>
  )
}
