import express from "express"
import { CommentsController } from "../controllers/commentsController.js"
import { StaticPagesController } from "../controllers/staticPagesController.js"
import { UsersController } from "../controllers/usersController.js"


export const router = express.Router();

router.get('/', (_req, res) => {
    StaticPagesController.index(res)
})

router.get('/about', (_req, res) => {
    StaticPagesController.about(res)
})

router.get('/comments', (_req, res) => {
    CommentsController.index(res)
})

router.get('/comments/:id', (req, res) => {
    CommentsController.show(req, res)
})

router.post('/comments', (req, res) => {
    CommentsController.create(req, res)
})

router.put('/comments/:id', (req, res) => {
    CommentsController.update(req, res)
})

router.delete('/comments/:id', (req, res) => {
    CommentsController.destroy(req, res)
})

router.get('/users', (_req, res) => {
    UsersController.index(res)
})

router.get('/users/registration', (_req, res) => {
    UsersController.registration(res)
})

router.post('/users', (req, res) => {
    UsersController.create(req, res)
})

router.get('/users/:user_id', (_req, res) => {
    UsersController.show(res)
})