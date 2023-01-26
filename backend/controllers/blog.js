const router = require("express").Router();
const Blog = require('../models/blog')
const multer = require('multer')
const path = require('path')
const express = require('express')
const app = express()
const cloudinary = require('../cloudinary');

// router.use(express.static(__dirname+"./uploads"))

// const Storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     },
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// const upload = multer({
//     storage: Storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     }, fileFilter: fileFilter
// })

// console.log(upload)

// app.post('/api/upload', upload.single('image'), (req, res) => {
//     res.status(200).json("file uploaded")
// });

const saveImage = async(img) => {
    const result = await cloudinary.uploader.upload(image,{folder:blog_images});
    return result.secure_url
}

const BlogController = {

    createBlog: async (req, res) => {
        const newBlog = new Blog({
            title: req.body.title,
            username: req.body.username,
            description: req.body.description,
             image: saveImage(req.file.filename)
        });
        try {
            const savedBlog = await newBlog.save();
            return res.status(200).json(savedBlog);
        } catch (err) {
            return res.status(500).json(err)
        }
    },

    deleteBlog: async (req, res) => {
        try {
            const blog = await Blog.findById(req.params.id);
            if (blog.username === req.body.username) {
                try {
                    await blog.delete();
                    return res.status(200).json("blog has been deleted.")

                } catch (err) {
                    return res.status(500).json(err);
                }
            } else {
                return res.status(401).json("you can delete only your blog")
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getBlog: async (req, res) => {
        try {
            const blog = await Blog.find({ username: req.params.user})
            res.status(200).json(blog)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getBlogById: async (req, res) => {
        try {
            const blog = await Blog.findById(req.params.id);
            res.status(200).json(blog);
        } catch (err){
            res.status(500).json(err);
        }
    },

    getAllBlog: async (req, res) => {
        try {
            const blog = await Blog.find({})
            res.status(200).json(blog)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateBlog: async (req, res) => {
        try {
            const blog = await Blog.findById(req.params.id);
            if (blog.username === req.body.username) {
                try {
                    const updatedBlog = await Blog.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: req.body,
                        },
                        { new: true }
                    );
                    return res.status(200).json(updatedBlog)

                } catch (err) {
                    return res.status(500).json(err);
                }
            } else {
                return res.status(401).json("you can update only your blog")
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = BlogController