const { arrayMongooseToObject } = require('../../utils/mongoose');
const Course = require('../models/Course');

class SiteController {
    // [GET] ---------- / ---------- //
    async home(req, res, next) {
        try {
            const data = await Course.find({});
            //   res.json(data);
            const courses = arrayMongooseToObject(data);
            res.render('home', {
                courses: courses,
            });
        } catch (err) {
            next(next);
            //   res.status(400).json({ error: err || "ERROR!!!" });
        }
    }

    // [GET] ---------- /search ---------- //
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
