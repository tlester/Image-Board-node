var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.model('images').find(function(err, images) {
        res.render('index', {images: images});
    });
});


module.exports = router;
