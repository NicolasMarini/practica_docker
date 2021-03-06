const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/all', PostController.getPosts);

module.exports = router;