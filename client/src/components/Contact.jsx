import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'

function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} id="contact" className={`${styles.contact} animate ${isVisible ? 'visible' : ''}`}>
      <p className={styles.label}>// contact</p>
      <h2 className={styles.title}>Hablemos</h2>
      <p className={styles.subtitle}>
        ¿Tenés una propuesta o querés charlar? Escribime.
      </p>
      <div className={styles.links}>
        <a href="mailto:lucasagustinleanza@gmail.com" className={styles.link}>
          ~/email
        </a>
        <a href="https://github.com/LucasLeanza" target="_blank" rel="noreferrer" className={styles.link}>
          ~/github
        </a>
        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className={styles.link}>
          ~/linkedin
        </a>
        <a href="/cv.pdf" download="Lucas_Leanza_CV" className={`${styles.link} ${styles.linkCv}`}>
          ~/descargar_cv.pdf
        </a>
      </div>
    </section>
  )
}

export default Contact