const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

const { runValidation } = require('../validators')
const { userSignupValidator } = require('../validators/auth')
const { userSigninValidator } = require('../validators/auth')
const { userupdateValidator } = require('../validators/auth')
const { userdeleteValidator } = require('../validators/auth')
// const { getUserValidator } = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, authController.signUp);
router.post('/signin', authController.signIn);
router.put('/user/update/:id', userupdateValidator, runValidation, authController.updateUser);
router.delete('/user/delete/:id', userdeleteValidator, runValidation, authController.deleteUser);

router.get('/user/:user', authController.getUser);
router.get('/users', authController.getAllUser);

module.exports = router;