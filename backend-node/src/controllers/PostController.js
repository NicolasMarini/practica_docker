const express = require('express');
const app = express();
const post = require('../models/Post');

module.exports.getPosts = (req, res, next) => {
    console.log(post.getPosts());
    res.send(post.getPosts());
}
