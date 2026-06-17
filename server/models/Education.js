import mongoose from 'mongoose'

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  type: { type: String, required: true }, //educación universitria/curso
  year: String,
  url: String, //Link al certificado ITBA
}, { timestamps: true })

export default mongoose.model('Education', educationSchema)