import Course from "../models/Courses.js"
import mongoose from '../../util/mongoose.js'

class MeController {

    // [GET], /me/stored/course
    stored(req, res) {
        
        Course.find({})
            .then(courses => {
                // res.json(courses)
                res.render('./me/stored-course',{
                    courses: mongoose.mutilpleMongooseToObject(courses)
                })
            })
            .catch(error => next(error))     
    }
    
}

export default new MeController