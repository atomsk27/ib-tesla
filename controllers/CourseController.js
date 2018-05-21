var courseController = {};

courseController.matematica = function(req, res){
    res.render('cursos/matematica');
};

courseController.algebra = function(req, res){
    res.render('cursos/algebra');
};

module.exports = courseController;
