const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../../util/mongoose');
const slug = require('mongoose-slug-generator');
const mongoose = require('../../../util/mongoose');
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    //[GET]/me/recycle/courses
    recycleCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/recycle-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();