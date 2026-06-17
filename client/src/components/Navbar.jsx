import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">~/lucas-leanza</Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={isOpen ? styles.lineTop : ''}></span>
        <span className={isOpen ? styles.lineMiddle : ''}></span>
        <span className={isOpen ? styles.lineBottom : ''}></span>
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <li><a href="/#about" onClick={() => setIsOpen(false)}>about</a></li>
        <li><a href="/#skills" onClick={() => setIsOpen(false)}>skills</a></li>
        <li><a href="/#projects" onClick={() => setIsOpen(false)}>projects</a></li>
        <li><a href="/#education" onClick={() => setIsOpen(false)}>education</a></li>
        <li><a href="/#contact" onClick={() => setIsOpen(false)}>contact</a></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar