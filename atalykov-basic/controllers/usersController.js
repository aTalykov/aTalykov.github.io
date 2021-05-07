import { User } from "../models/user.js"
import bcrypt, { hash } from "bcrypt"

export class UsersController {
    static index(res) {
        res.render('users/index', { main_title: "Users", users: [] })
    }
    static show(res) {
        res.render('users/show', { main_title: user.name, user: {} })
    }

    static registration(res) {
        res.render('users/registration', { main_title: "Registration" })
    }
    static create(req, res) {
        const saltRounds = 10
        bcrypt.hash(req.body.user_password, saltRounds).then((hash) => {
            const user = new User({
                username: req.body["user_username"],
                email: req.body["user_email"],
                hashed_password: hash,
                name: req.body["user_name"],
                surname:req.body["user_surname"]
            })
            user.save().then(() => {
                res.redirect('/')
            }).catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
        })
    }
}