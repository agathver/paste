const Paste = require('../models/paste');

function newPaste(req, res) {
    res.render('new_paste');
}

async function savePaste(req, res, next) {
    // optionally validate the content
    try {
        const paste = new Paste({
            title: req.body.title,
            content: req.body.content
        });

        await paste.save();

        res.redirect(`/paste/${paste.id}`);
    } catch (err) {
        next(err);
    }
}

async function showPaste(req, res, next) {
    try {
        const paste = Paste.findById(req.params.id);

        if (!paste) {
            return next();
        }

        res.render('paste', { paste });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    newPaste,
    showPaste,
    savePaste
}