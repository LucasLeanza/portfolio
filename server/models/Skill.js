import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, //Ej: frontend, backend, tools
  icon: String, //nombre del icono o url
}, { timestamps: true })

export default mongoose.model('Skill', skillSchema)