import siteRouter from './site.js'
import courseRouter from './course.js'
import meRouter from './me.js'



function route(app) {

    app.use('/me',meRouter)

    app.use('/course',courseRouter)

    app.use('/',siteRouter)

}

export default route;