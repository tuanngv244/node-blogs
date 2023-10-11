const { objectMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');
const { RoutePaths } = require('../../config/path');

class CourseController {
    // [GET] ---------- /courses ---------- //
    index(req, res) {
        res.render('courses');
    }
    // [GET] ---------- /courses/create ---------- //
    create(req, res) {
        res.render(`courses/create`);
    }
    // [POST] ---------- /courses/store ---------- //
    store(req, res, next) {
        try {
            const formData = req.body;
            formData['image'] =
                'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png';
            const course = new Course(formData);
            course.save();
            res.send('Tạo thành công!!');
        } catch (error) {
            next(next);
        }
    }
    // [GET] ---------- /courses/:slug ---------- //
    async detail(req, res, next) {
        try {
            const { params } = req;
            const slug = params.slug;
            const data = await Course.findOne({ slug: slug });
            const course = objectMongooseToObject(data);
            res.render(`courses/detail`, {
                data: course,
            });
        } catch (err) {
            next(next);
        }
    }
}

module.exports = new CourseController();
