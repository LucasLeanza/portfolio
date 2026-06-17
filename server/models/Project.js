import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  image: String,
}, { timestamps: true })

export default mongoose.model('Project', projectSchema)