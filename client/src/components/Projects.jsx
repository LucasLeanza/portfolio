import { useState, useEffect } from 'react'
import { getProjects } from '../services/api'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects()
      .then(res => {
        setProjects(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.label}>// my_work</p>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects