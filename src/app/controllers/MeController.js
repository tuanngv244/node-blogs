const { arrayMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] ---------- /search ---------- //
    storeCourses(req, res) {
        res.render('search');
    }
}

module.exports = new MeController();
