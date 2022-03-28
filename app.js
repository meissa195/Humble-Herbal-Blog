// require express & morgan & mongoose
const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { render } = require('express/lib/response')
const blogRoutes = require('./routes/blogRoutes')

// connect to MongoDB
const dbURI = "mongodb+srv://meissa001:Ei7122e!@herbal-blog.ydhhp.mongodb.net/humbleherbal?retryWrites=true&w=majority"
mongoose.connect(dbURI)

// listen for requests after connected to db
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

// setup express app
const app = express()

// register view engine using ejs
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))

// takes data and parses into object
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

// respond requests
app.get('/', (req, res) => {
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})
// blog routes 
app.use('/blogs', blogRoutes)

// 404 Page - only if it reaches here
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})