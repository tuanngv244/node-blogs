const { arrayMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] ---------- /store ---------- //
    async storeCourses(req, res, next) {
        try {
            const data = await Course.find();
            const courses = arrayMongooseToObject(data);
            res.render('me/stored-courses', { courses });
        } catch (err) {
            next(next);
        }
    }
    // [GET] ---------- /trash ---------- //
    async trashCourses(req, res, next) {
        try {
            const data = await Course.findDeleted();
            const courses = arrayMongooseToObject(data);
            res.render('me/trash-courses', { courses });
        } catch (err) {
            next(next);
        }
    }
}

module.exports = new MeController();
