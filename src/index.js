import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import route from './routes/index.js'
import db from './config/db/index.js'
import bodyParser from 'body-parser'
import methodOverride from'method-override'

const app = express()
const port = 8888

app.use(express.static('./src/public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Method Overide
app.use(methodOverride('_method'))

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views');

// HTTP logger
app.use(morgan('combined'))

// Routes
route(app)

// Connect to db
db.connect()

app.listen(port, (req, res) => {
    console.log(`Our server is live on ${port}. Yay!`);
})