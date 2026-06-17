import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPostBySlug } from '../services/api'
import styles from './BlogPost.module.css'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPostBySlug(slug)
      .then(res => {
        setPost(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <p>Cargando...</p>
  if (!post) return <p>Post no encontrado</p>

  return (
    <div className={styles.wrapper}>
      <Link to="/blog" className={styles.back}>← ~/blog</Link>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span className={styles.date}>
          {new Date(post.createdAt).toLocaleDateString('es-AR')}
        </span>
        <div className={styles.tags}>
          {post.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.content}>{post.content}</div>
    </div>
  )
}

export default BlogPost