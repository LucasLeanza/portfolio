import express from 'express'
import { getEducation, createEducation } from '../controllers/educationController.js'

const router = express.Router()

router.get('/', getEducation)
router.post('/', createEducation)

export default router