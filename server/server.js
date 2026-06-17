import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'
import skillRoutes from './routes/skillRoutes.js'
import educationRoutes from './routes/educationRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/projects', projectRoutes)
app.use('/api/skills', skillRoutes)
app.use('/api/education', educationRoutes)
app.use('/api/blog', blogRoutes)

//Ruta base
app.get('/', (req, res) => {
  res.send('API Funcionando')
})


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})