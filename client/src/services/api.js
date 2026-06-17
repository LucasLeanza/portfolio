import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const getProjects = () => API.get('/projects')
export const getSkills = () => API.get('/skills')
export const getEducation = () => API.get('/education')
export const getBlogPosts = () => API.get('/blog')
export const getBlogPostBySlug = (slug) => API.get(`/blog/${slug}`)