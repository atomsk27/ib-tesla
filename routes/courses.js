var express = require('express');
var router = express.Router();
var major = require("../controllers/CourseController.js");


//route for courses
router.get('/', function(req, res){
    res.redirect('/cursos/matematica');
});

router.get('/matematica', major.matematica);

router.get('/algebra', major.algebra);


module.exports = router;
