import Course from '../models/Courses.js'
import mongoose from '../../util/mongoose.js'

class SiteController {
    // [GET] /
    index(req, res) {
        
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mongoose.mutilpleMongooseToObject(courses)
                })
            })
            .catch(error => next(error))
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

export default new SiteController