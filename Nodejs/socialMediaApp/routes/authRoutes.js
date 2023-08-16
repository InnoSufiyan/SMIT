import express from 'express'
import { login, registeration } from '../controllers/authController.js'

const authRoutes = express.Router()

authRoutes.post('/register', registeration)
authRoutes.post('/login', login)

export default authRoutes