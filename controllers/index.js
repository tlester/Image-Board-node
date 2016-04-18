var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* Add additional Controller Here */
// router.use('/animals', require('./animals'))
// router.use('/cars', require('./cars'))


/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.model('images').find(function(err, images) {
        res.render('index', {images: images});
    });
});

module.exports = router;
