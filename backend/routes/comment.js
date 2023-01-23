const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment');


const { runValidation } = require('../validators')
const { commentValidator } = require('../validators/comment')
const { commentupdateValidator } = require('../validators/comment')
const { commentdeleteValidator } = require('../validators/comment')

router.post('/comment/:id', commentValidator, runValidation, commentController.comment);
router.put('/comment/update/:id', commentupdateValidator, runValidation, commentController.updateComment);
router.delete('/comment/delete/:id', commentdeleteValidator, runValidation,  commentController.deleteComment);







module.exports = router;