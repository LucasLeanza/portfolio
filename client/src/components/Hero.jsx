import styles from './Hero.module.css'
import useTypewriter from '../hooks/useTypewriter'

function Hero() {
  const displayed = useTypewriter('Lucas Leanza', 100)

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.label}>// hola mundo, soy</p>
        <h1 className={styles.name}>
          {displayed}
          <span className={styles.cursor} />
        </h1>
        <h2 className={styles.role}>Full Stack Developer_</h2>
        <p className={styles.description}>
          Apasionado por construir aplicaciones web modernas con el stack MERN.
          Busco mi primera oportunidad como desarrollador.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>ver_proyectos()</a>
          <a href="/cv.pdf" download="Lucas_Leanza_CV" className={styles.btnSecondary}>
            descargar_cv.pdf
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero