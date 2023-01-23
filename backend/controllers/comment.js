const router = require("express").Router();
const Comment = require('../models/comment')
const Blog = require('../models/blog');
const { json } = require("body-parser");

const CommentController = {

    comment: async (req, res) => {

        const blog_id = await Blog.findById(req.params.id);
        const blogId = (req.params.id)
        try {
            const newComment = new Comment({
                text: req.body.text,
                username: req.body.username,
                blog: blogId,

            });
            // console.log("getting res.")
            const savedComment = await newComment.save();

            try {
                await Blog.updateOne({ _id: blog_id },
                    {
                        $push: { comments: savedComment }
                    },
                    { new: true }
                )

            } catch (err) {
                res.status(500).json(err);
            }

            res.status(200).json(savedComment);

        } catch (err) {
            res.status(500).json(err)
        }

    },

    deleteComment: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (comment.username === req.body.username) {
                try {
                    await comment.delete();
                    return res.status(200).json("comment deleted.")

                } catch (err) {
                    return res.status(500).json('comment deleted');
                }
            } else {
                return res.status(401).json("you can delete only your comment")
            }
        } catch (err) {
            return res.status(500).json('comment deleted');
        }
    },

    updateComment: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (comment.username === req.body.username) {
                try {
                    const updatedCmnt = await Comment.findByIdAndUpdate(
                        req.params.id,
                        {
                            $set: req.body,
                        },
                        { new: true }
                    );
                    return res.status(200).json(updatedCmnt)

                } catch (err) {
                    return res.status(500).json(err);
                }
            } else {
                return res.status(401).json("you can update only your comment")
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    }


}

module.exports = CommentController