import { useState, useEffect } from 'react'
import { getSkills } from '../services/api'
import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './Skills.module.css'

function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [ref, isVisible] = useScrollAnimation()

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

  return (
    <section ref={ref} id="skills" className={`${styles.skills} animate ${isVisible ? 'visible' : ''}`}>
      <p className={styles.label}>// tech_stack</p>
      <h2 className={styles.title}>Skills</h2>
      {loading ? <p>Cargando...</p> : (
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
      )}
    </section>
  )
}

export default Skills