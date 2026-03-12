"use client"
import { FormEvent, useRef, useState } from "react"
export default function Createnewpost() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [address,setAddress] = useState("")
    
    const [image,setImage] = useState("")

    const fileRef = useRef<HTMLInputElement>(null)

    function upfile() {
      fileRef.current?.click()
    }


    // save to mongodb
    // function hfile(f: React.ChangeEvent<HTMLInputElement>) {
    //   const file = f.target.files?.[0]
    //   if(!file) return
    
    //   if(file.size > 2 * 1024 * 1024){
    //     alert("Image must be smaller than 2MB")
    //     return
    //   }

    //   const reader = new FileReader()
    
    //   reader.onloadend = () => {
    //     setImage(reader.result as string)
    //   }
    
    //   reader.readAsDataURL(file)
    // }

    function hfile(f: React.ChangeEvent<HTMLInputElement>) {
      const file = f.target.files?.[0]
      if(!file) return

      const url = URL.createObjectURL(file)
      setImage(url)
    }

    async function hsummid(e:FormEvent) {
      e.preventDefault();

      if(!address || !title) {
        alert("Please")
        return
      }

      const userId = localStorage.getItem("userId")

      console.log("userId:", userId)

      const res = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            content,
            address,
            image,
            userId,
          })
      })

      setTitle("")
      setContent("")
      setAddress("")
      setImage("")

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
        <input
          value={image}
          placeholder="Url Image"
          onChange={(f) => {
            setImage(f.target.value)
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
          ref={fileRef}
          style={{display: "none"}}
          accept="image/*"
          onChange={hfile}
        />
        {image && <img src={image} width={200} />}
        <button type="submit">
            Create
        </button>
    </form>
  )
}
