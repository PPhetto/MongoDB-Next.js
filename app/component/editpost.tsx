"use client"

import { Propedit } from "@/types/Post"
import { useState } from "react"
export default function Editpost(props : Propedit) {

    const { id } = props
    const [title,setTitle] = useState(props.title)
    const [content,setContent] = useState(props.content)

    const [cstatus,setCstatus] = useState(false)

    async function editPost() {
        const res = await fetch("/api/posts", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                title,
                content,
            })
        })

        // location.reload()
    }
  return (
    <form onSubmit={editPost}>
        <button
            type="button"
            onClick={() => {
                setCstatus(!cstatus)
            }}
        >
            Edit
        </button>
        {cstatus && 
            <div>
                <input
                    value={title}
                    placeholder="new title"
                    onChange={(t) => {
                        setTitle(t.target.value)
                    }}
                />
                <input
                    value={content}
                    placeholder="new content"
                    onChange={(c) => {
                        setContent(c.target.value)
                    }}
                />
                <button type="submit">
                    Save
                </button>
            </div>
        }
        {/* <input
            value={title}
            placeholder="new title"
            onChange={(t) => {
                setTitle(t.target.value)
            }}
        />
        <input
            value={content}
            placeholder="new content"
            onChange={(c) => {
                setContent(c.target.value)
            }}
        />
        <button type="submit">
            Save
        </button> */}
    </form>
  )
}
