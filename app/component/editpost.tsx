"use client"

import { Propedit } from "@/types/Post"
import { useRef, useState } from "react"
export default function Editpost(props : Propedit) {

    const { id } = props
    const [title,setTitle] = useState(props.title)
    const [content,setContent] = useState(props.content)
    const [address,setAddress] = useState(props.address)
    const [image,setImage] = useState(props.image)

    const [cstatus,setCstatus] = useState(false)

    const file = useRef<HTMLInputElement>(null)

    function upfile() {
        file.current?.click()
    }

    function hfile(f: React.ChangeEvent<HTMLInputElement>) {
        const ffile = f.target.files?.[0]
        if(!ffile) return

        const url = URL.createObjectURL(ffile)
        setImage(url)
    }

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
                address,
                image,
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
                <input
                    value={address}
                    placeholder="new address"
                    onChange={(a) => {
                        setAddress(a.target.value)
                    }}
                />
                <input
                    value={image}
                    placeholder="new image"
                    onChange={(i) => {
                        setImage(i.target.value)
                    }}
                />
                <button
                    type="button"
                    onClick={upfile}
                >
                    Upload Image
                </button>
                <input
                    type="file"
                    ref={file}
                    style={{display:"none"}}
                    accept="image/*"
                    onChange={hfile}
                />
                {image && <img src={image} width={200} />}
                <button type="submit">
                    Save
                </button>
            </div>
        }
    </form>
  )
}
