import express from 'express'
import { addPost, getPost, getPosts } from '../controllers/postsController.js'

const postsRoutes = express.Router()

postsRoutes.get('/:id', getPost)
postsRoutes.get('/', getPosts)
postsRoutes.post('/', addPost)

export default postsRoutes