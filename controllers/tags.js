var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET main tags page. */
router.get('/', function(req, res, next) {
    mongoose.model('images').find(function(err, images) {
        res.render('index', {images: images});
    });
});

module.exports = router;
