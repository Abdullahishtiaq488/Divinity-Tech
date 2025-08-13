export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
    bio?:any
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  image: string
  featured: boolean
}

export interface BlogCategory {
  name: string
  count: number
  color: string
}
