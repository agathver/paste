function index(req, res) {
    console.log('Rendering home');
    res.render('home');
}

module.exports = {
    index
};