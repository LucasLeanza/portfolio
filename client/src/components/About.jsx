import useScrollAnimation from '../hooks/useScrollAnimation'
import styles from './About.module.css'

function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} id="about" className={`${styles.about} animate ${isVisible ? 'visible' : ''}`}>
      <p className={styles.label}>// about_me</p>
      <h2 className={styles.title}>
        Desarrollador apasionado<br />por el código <span>limpio</span>
      </h2>
      <p className={styles.text}>
        Soy <strong>Lucas Leanza</strong>, desarrollador Full Stack con foco en el stack MERN.
        Me apasiona construir aplicaciones web desde cero, tanto el frontend como el backend.
      </p>
      <p className={styles.text}>
        Actualmente busco mi <strong>primera oportunidad laboral</strong> como desarrollador
        para seguir creciendo y aportar valor a un equipo.
      </p>
    </section>
  )
}

export default About