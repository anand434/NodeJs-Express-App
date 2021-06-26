const express = require('express');
const Post = require('../models/post');
const router = express.Router();


router.get(
    '/', (req, res) => {
        res.send('this is post');
    }
);

router.post('/api', (req, res) => {
    const post = new Post({
        title: req.body.title,
        descripton: req.body.descripton
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err});
    })
});


module.exports = router
