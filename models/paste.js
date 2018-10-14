const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled'
    },
    content: String,
    // contentType: {
    //     type: String,
    //     default: 'text/plain'
    // }
}, { timestamps: true });

module.exports = mongoose.model('Paste', schema);