import { useState, useEffect } from 'react'
import { getEducation } from '../services/api'
import styles from './Education.module.css'

function Education() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEducation()
      .then(res => {
        setItems(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <section id="education" className={styles.education}>
      <p className={styles.label}>// education</p>
      <h2 className={styles.title}>Educación y Certificaciones</h2>
      <div className={styles.list}>
        {items.map(item => (
          <div key={item._id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.institution}>{item.institution}</span>
              </div>
              <div className={styles.meta}>
                {item.year && <span className={styles.year}>{item.year}</span>}
                <span className={styles.type}>{item.type}</span>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noreferrer" className={styles.link}>
                    ~/ver
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education