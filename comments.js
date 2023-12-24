// Create web server

var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');

// Get all comments
router.get('/', function(req, res, next) {
    Comments.find(function (err, comments) {
        if (err) return next(err);
        res.json(comments);
    });
});

// Get single comment by id
router.get('/:id', function(req, res, next) {
    Comments.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Save comment
router.post('/', function(req, res, next) {
    Comments.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Update comment
router.put('/:id', function(req, res, next) {
    Comments.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Delete comment
router.delete('/:id', function(req, res, next) {
    Comments.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;