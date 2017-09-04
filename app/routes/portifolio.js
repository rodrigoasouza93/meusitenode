module.exports = function (app) {
    app.get('/portifolio', function (req, res) {
        res.render('portifolio');
    })
}
