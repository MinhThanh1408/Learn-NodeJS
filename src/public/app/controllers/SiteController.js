const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../../util/mongoose');

class SiteController {
    //[GET]
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // res.render('home');
    }

    //[GET]/search
    search(req, res) {
        res.send('Search');
    }
}

module.exports = new SiteController();
