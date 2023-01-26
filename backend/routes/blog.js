const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blog');
const upload = require('../controllers/blog');

const { runValidation } = require('../validators')
const { blogValidator } = require('../validators/blog')
const { blogupdateValidator } = require('../validators/blog')
const { blogdeleteValidator } = require('../validators/blog')


router.post('/blog', blogValidator, runValidation, blogController.createBlog);
router.put('/update/:id', blogupdateValidator, runValidation, blogController.updateBlog);
router.delete('/delete/:id', blogdeleteValidator, runValidation, blogController.deleteBlog);

router.get('/user/blog/:user', blogController.getBlog);
router.get('/blog/:id', blogController.getBlogById);
router.get('/blogs', blogController.getAllBlog);


module.exports = router;