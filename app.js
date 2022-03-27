// require express
const express = require ('express')

// setup express app
const app = express()

// listen for requests
app.listen(3000, 'localhost');

// respond requests
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname})
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname})
})
// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
// 404 Page - only if it reaches here
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})