// create functions to inject controllers into app
// import blog model
const Blog = require ('../models/blog')

// function for blog index
const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
       res.render('index', {title: 'All Blogs', blogs: result}) 
    })
    .catch((err) => {
        console.log(err)
    })
}
// function for blog details
const blog_details = (req, res) => {
      // get the idea from request
      const id = req.params.id
      Blog.findById(id)
      .then((result) => {
          res.render('details', {title: 'Blog Details', blog: result})
      })
      .catch((err) => {
        res.render('404', {title: 'Blog not found'})
      })
}
// function for submit post
const blog_create_get = (req, res) => {
    res.render('create', {title: 'Create a new Blog'})
}
// function for post post
const blog_create_post = (req, res) => {
    // create instance of Blog model and pass in form data
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
}
// function for delete post
const blog_delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'})
    })
    .catch((err) => {
        console.log(err)
    })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}
