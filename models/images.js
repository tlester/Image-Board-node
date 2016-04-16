var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imagesSchema = new Schema({
    name: String,
    link: String,
    description: String,
    tags: Array,
    user: {
        type: Schema.ObjectID,
        ref: 'users'
    }
});

mongoose.model('users', userSchema)
