const Course = require('../models/Course');

class SiteController {
    // [GET] ---------- / ---------- //
    async home(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (err) {
            next(err);
            //   res.status(400).json({ error: err || "ERROR!!!" });
        }
    }
    // [GET] ---------- /search ---------- //
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
