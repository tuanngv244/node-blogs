const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

router.post('/store', coursesController.store);
router.get('/create', coursesController.create);
router.get('/:slug', coursesController.detail);
// newsController.index
router.get('/courses', coursesController.index);

module.exports = router;
