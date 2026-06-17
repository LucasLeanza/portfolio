import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, technologies, githubUrl, liveUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map(tech => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.links}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className={styles.link}>
              ~/github
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className={styles.link}>
              ~/live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard