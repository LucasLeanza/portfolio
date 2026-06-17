import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts } from '../services/api'
import styles from './Blog.module.css'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPosts()
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <div className={styles.blog}>
      <p className={styles.label}>// blog</p>
      <h1 className={styles.title}>Notas técnicas</h1>
      <div className={styles.list}>
        {posts.map(post => (
          <div key={post._id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.cardBody}>
              <Link to={`/blog/${post.slug}`} className={styles.cardTitle}>
                {post.title}
              </Link>
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <span className={styles.date}>
                {new Date(post.createdAt).toLocaleDateString('es-AR')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog