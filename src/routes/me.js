const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.post('/stored/courses', meController.storeCourses);

module.exports = router;
