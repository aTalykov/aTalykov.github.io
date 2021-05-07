import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, uniqueCaseInsensitive: true, trim: true },
    email: { type: String, required: true, uniqueCaseInsensitive: true, trim: true },
    hashed_password: { type: String, required: true },
    name: { type: String },
    surname: { type: String }
})

userSchema.plugin(uniqueValidator)

export const User = mongoose.model('User', userSchema)