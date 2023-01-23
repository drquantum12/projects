const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    text: {
        type: String,
        // trim: true,
        required: true,
    },
    username: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        // required: true,
    },

})

module.exports = mongoose.model('Comment', commentSchema);