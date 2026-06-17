import BlogPost from "../models/BlogPost.js"

export const getBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find({published:true})
    res.json(posts)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const getBlogPostBySlug = async (req, res) => {
  try {
    const post = await BlogPost.findOne({slug: req.params.slug})
    if (!post) return res.status(404).json({message: 'Post no encontrado'})
    res.json(post)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const createBlogPost = async (req, res) => {
  try {
    const post = await BlogPost.create(req.body)
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}