import Course from "../models/Courses.js"
import mongoose from '../../util/mongoose.js'
import bodyParser from 'body-parser'

class CourseController {

    // [GET] /course/create
    create(req, res, next) {
        res.render('./courses/create')
    }

    // [POST] /news/store
    store(req, res, next) {
        const formData = req.body
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/0.jpg`
        const course = new Course(formData);
        course.save(function (err) {
            if (err) return handleError(err);
            // saved!
        });
        res.redirect('/course')
    }

    // [GET] /course/show/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {

                res.render('./courses/show', { course: mongoose.mongooseToObject(course) })
            })
            .catch(next)
    }

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then(course => {
                res.render('./courses/edit', { course: mongoose.mongooseToObject(course) })
            })
            .catch(next)
    }
    // [PUT] /course/:id
    update(req, res, next) {
        const formData = req.body
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/0.jpg`
        // res.json(formData)
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }

    // [PUT] /course/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }
}

export default new CourseController