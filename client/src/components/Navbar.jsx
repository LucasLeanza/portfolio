import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">~/lucas-leanza</Link>
      </div>
      <ul className={styles.links}>
        <li><a href="/#about">about</a></li>
        <li><a href="/#skills">skills</a></li>
        <li><a href="/#projects">projects</a></li>
        <li><a href="/#education">education</a></li>
        <li><a href="/#contact">contact</a></li>
        <li><Link to="/blog">blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar