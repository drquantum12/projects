const { check } = require('express-validator')
const blog = require('../models/blog')
const user = require('../models/user')
const comment = require('../models/comment')

exports.commentValidator = [

    check('text')
        .not()
        .isEmpty()
        .withMessage('text is required'),
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('not a user to post comment')
                }
            })
        }
        ),
    // check('blog')
    //     .not(),

];


exports.commentupdateValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can update only your comment')
                }
            })
        }
        ),
    check('text')
        .not()
        .isEmpty()
        .withMessage('text is required')
        .custom(async (text) => {
            const existingComment =
                await comment.findOne({ text })

            if (existingComment) {
                throw new Error('comment already exist')
            }
        }),

];


exports.commentdeleteValidator = [

    // check('text')
    //     .not()
    //     .isEmpty()
    //     .withMessage('text is required')
    //     .custom(async (text) => {
    //         const existingComment =
    //             await comment.findOne({ text})

    //         if (!existingComment) {
    //             throw new Error('Comment not exist')
    //         }
    //     }),
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can delete only your comment')
                }
            })
        }
        ),

];