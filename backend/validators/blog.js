const { check } = require('express-validator')
const blog = require('../models/blog')
const user = require('../models/user')

exports.blogValidator = [

    check('title')
        .not()
        .isEmpty()
        .withMessage('title is required')
        .custom(async (title) => {
            const existingTitle =
                await blog.findOne({ title })

            if (existingTitle) {
                throw new Error('Title already in use')
            }
        }),
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('not a user to post blog')
                }
            })
        }
        ),
    check('description')
        .not()
        .isEmpty()
        .withMessage('description is required'),


];


exports.blogupdateValidator = [

    check('title')
        .not()
        .isEmpty()
        .withMessage('title is required')
        .custom(async (title) => {
            const existingTitle =
                await blog.findOne({ title })

            if (existingTitle) {
                throw new Error('Title already exist')
            }
        }),
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can update only your blog')
                }
            })
        }
        ),
    check('description')
        .not()
        .isEmpty()
        .withMessage('description is required'),


];


exports.blogdeleteValidator = [

    check('title')
        .not()
        .isEmpty()
        .withMessage('title is required')
        .custom(async (title) => {
            const existingTitle =
                await blog.findOne({ title })

            if (!existingTitle) {
                throw new Error('Title not exist')
            }
        }),
    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can delete only your blog')
                }
            })
        }
        ),

];
