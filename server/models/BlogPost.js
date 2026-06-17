import mongoose from 'mongoose'

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  tags: [String],
  published: { type: Boolean, default: false},
}, { timestamps: true })

export default mongoose.model('BlogPost', blogPostSchema)