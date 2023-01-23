const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY
// process.env.TOKEN_SECRET;


const AuthController = {

    signUp: async (req, res) => {

        try {
            
            const hashedPass = await bcrypt.hash(req.body.password, 12)
            console.log(hashedPass)
            const newUser = await User.create({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                // password: req.body.password,

                password: hashedPass,
            });
            // const user = await newUser.save();
            console.log(newUser)
            res.status(200).json(newUser);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    signIn: async (req, res) => {
        try {

            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                return res.status(400).json({message:'username not found'})

            }
            console.log(res)

            const validated = await bcrypt.compare(req.body.password, user.password)

            console.log(user)
            if (!validated) {
                return res.status(400).json('invalid credentials')
               
            }
            console.log(res)

            let token = jwt.sign({ username: user.username, id: user._id }, SECRET_KEY, { expiresIn: '20d' })
            console.log(token)
            return res.status(200).json({ user, token })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user.username === req.body.username) {
                try {
                    await user.delete();
                    return res.status(200).json("user has been deleted.")
                } catch (err) {
                    return res.status(500).json(err);
                }
            } else {
                return res.status(401).json("you can delete only your account")
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user.username === req.body.username) {
                try {
                    const updatedUser = await User.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: req.body,
                        },
                        { new: true }
                    );
                    return res.status(200).json(updatedUser)

                } catch (err) {
                    return res.status(500).json(err);
                }
            } else {
                return res.status(401).json("you can update only your account")
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.params.user })
            // console.log("first")
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllUser: async (req, res) => {
        try {
            const user = await User.find({})
            // console.log("first")
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

}

module.exports = AuthController
