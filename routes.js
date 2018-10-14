const express = require('express');

const home = require('./controllers/home');
const paste = require('./controllers/paste');

const router = express.Router();

router
    .get('/', home.index)
    .get('/paste/show', paste.showRedirect)
    .get('/paste/new', paste.newPaste)
    .get('/paste/:id', paste.showPaste)
    .post('/paste', paste.savePaste);

module.exports = router;