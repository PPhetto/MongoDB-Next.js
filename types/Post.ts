export type Post = {
    _id: string
    title: string
    content: string
    address: string
}

export type Propdelete = {
    id: string
}

export type Propedit = {
    id: string
    title: string
    content: string
}

export type CreatePost = {
    id: string
    title: string
    content: string
}