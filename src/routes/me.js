const express = require('express');
const router = express.Router();
const meController = require('../public/app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/recycle/courses', meController.recycleCourses);


module.exports = router;