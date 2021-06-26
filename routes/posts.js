const express = require('express');
const Post = require('../models/post');
const router = express.Router();


// get specific post
router.get('/api/:postId', async (req, res) => {
    try {
        const ppost = await Post.findById(req.params.postId);
        res.json(ppost);
    }
    catch (err){ 
        res.json({message: err});
    }
});

// Update Post
router.patch('/api/:postId', async (req, res) => {
    try {
        const updateOp = await Post.update({_id: req.params.postId}, {
            $set : {
                title: req.body.title,
                descripton: req.body.descripton
            }
        });
        res.json(updateOp);
    }
    catch(err) {
        res.json({ message: err});
    }
});

// Delete Post
router.delete('/api/:postId', async (req, res) => {
    try {
        const delOp = await Post.remove({_id: req.params.postId});
        res.json(delOp);
    }
    catch(err) {
        res.json({ message: err});
    }
});


// get all posts
router.get( '/api', 
    async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        }
        catch(err) {
            res.json({ message: err});
        }
    
    }
);


// submit a post
router.post('/api', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        descripton: req.body.descripton
    });

    try {
        const saveedPost = await post.save();
        res.json(saveedPost);
    }
    catch(err) {
        res.json({ message: err});
    }

});


module.exports = router
