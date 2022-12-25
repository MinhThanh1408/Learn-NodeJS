const express = require('express');
const router = express.Router();
const courseController = require('../public/app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:_id/edit', courseController.edit);
router.patch('/:_id/restore', courseController.restore)
router.put('/:_id', courseController.update);
router.delete('/:_id', courseController.delete);
router.delete('/:_id/destroy', courseController.destroy);
// router.get('/:slug', courseController.show);


module.exports = router;