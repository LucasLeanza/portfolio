import { useState, useEffect } from 'react'
import { getSkills } from '../services/api'
import styles from './Skills.module.css'

function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSkills()
      .then(res => {
        setSkills(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <section id="skills" className={styles.skills}>
      <p className={styles.label}>// tech_stack</p>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map(skill => (
          <div key={skill._id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.name}>{skill.name}</span>
              <span className={styles.category}>{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills