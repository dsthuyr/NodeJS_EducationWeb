import express from 'express'
import meController from '../app/controllers/MeController.js'
const router = express.Router()


router.get('/stored/courses', meController.stored)

export default router