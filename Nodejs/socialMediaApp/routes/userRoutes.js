import express from 'express'
import { getUser, getUsers } from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUser)

export default userRoutes