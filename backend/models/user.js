const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true,
        max: 10,
    },
    firstname: {
        type: String,
        trim: true,
        required: true,
        max: 20,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
        max: 10,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: { type: String },

},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);  