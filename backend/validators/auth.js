const { check } = require('express-validator')
const user = require('../models/user')
const password = require('../models/user')
const bcrypt = require('bcrypt')

exports.userSignupValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('userame is required')
        .custom(async (username) => {
            const existingUser =
                await user.findOne({ username })

            if (existingUser) {
                throw new Error('username already in use')
            }
        }),
    check('firstname')
        .not()
        .isEmpty()
        .withMessage('firstname is required'),
    check('lastname')
        .not()
        .isEmpty()
        .withMessage('lastname is required'),
    check('email')
        .isEmail()
        .withMessage('must be a valid email')
        .custom(async (email) => {
            const existingEmail =
                await user.findOne({ email })

            if (existingEmail) {
                throw new Error('email already in use')
            }
        }),
    check('password')
        .isLength({ min: 6 })
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/, "i"
        )
        .withMessage('Please enter a password at least 6 character and contain At least one uppercase.At least one lower case,one special character and one digit.')

];

exports.userSigninValidator = [

    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('username not found')
                }
            })
        }),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 character')
        .custom((value, { req, next }) => {
            return user.findOne({ username: req.body.username }).then(user => {
                const check = bcrypt.compare(value, user.password);
                if (!check) {
                    return Promise.reject('Password does not match');
                }
            });
        })
];




exports.userupdateValidator = [

    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can update only your account')
                }
            })
        }),
    // check('password')
    //     .isLength({ min: 6 })
    //     .withMessage('Password must be 6 character')
    //     .custom(value => {
    //         return user.findOne({ password: value }).then(foundPassword => {
    //             if (!foundPassword) {
    //                 return Promise.reject('password does not match')
    //             }
    //         })
    //     }),
    check('firstname')
        .not()
        .isEmpty()
        .withMessage('firstname Required'),
    check('lastname')
        .not()
        .isEmpty()
        .withMessage('lasttname Required'),
    check('email')
        .isEmail()
        .withMessage('must be a valid email')
        .custom(async (email) => {
            const existingEmail =
                await user.findOne({ email })

            if (existingEmail) {
                throw new Error('email already in use')
            }
        }),


];

exports.userdeleteValidator = [

    check('username')
        .not()
        .isEmpty()
        .withMessage('username is required')
        .custom(value => {
            return user.findOne({ username: value }).then(foundUser => {
                if (!foundUser) {
                    return Promise.reject('you can delete only your account')
                }
            })
        }
        ),
    // check('password')
    //     .isLength({ min: 6 })
    //     .withMessage('Password must be 6 character')
    //     .custom(value => {
    //         return user.findOne({ password: value }).then(foundPassword => {
    //             if (!foundPassword) {
    //                 return Promise.reject('password does not match')
    //             }
    //         })
    //     }
    //     )
];