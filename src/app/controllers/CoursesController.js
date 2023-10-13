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
    // [GET] ---------- /courses/:id/edit ---------- //
    async edit(req, res, next) {
        try {
            const id = req?.params?.id;
            const data = await Course.findById(id);
            const course = objectMongooseToObject(data);
            res.render(`courses/edit`, { course });
        } catch (error) {
            next(next);
        }
    }
    // [PUT] ---------- /courses/:id ---------- //
    async update(req, res, next) {
        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            next(next);
        }
    }
    // [PATCH] ---------- /courses/:id/restore ---------- //
    async restore(req, res, next) {
        try {
            await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(next);
        }
    }
    // [DELETE] ---------- /courses/:id ---------- //
    async destroy(req, res, next) {
        try {
            await Course.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(next);
        }
    }
    // [DELETE] ---------- /courses/:id/force ---------- //
    async forceDestroy(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(next);
        }
    }
    // [POST] ---------- /courses/store ---------- //
    async store(req, res, next) {
        try {
            const formData = req.body;
            const course = new Course(formData);
            await course.save();
            res.redirect('/me/stored/courses');
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
