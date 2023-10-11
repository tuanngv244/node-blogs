const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const { RoutePaths } = require('../config/path');

function route(app) {
    app.use(RoutePaths.COURSES, coursesRouter);
    app.use(RoutePaths.NEWS, newsRouter);
    app.use(RoutePaths.HOME, siteRouter);

    app.post('/search', (req, res) => {
        //req.query ----> how to get query parameters from API url
        console.log(req.body);
        return res.render('search');
    });
}

module.exports = route;
