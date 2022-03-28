const mongoose = require('mongoose')
// get schema from mongoose to develop structure of db
const Schema = mongoose.Schema
// new instance of schema for our blog
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps: true})

// model for our schema
const Blog = mongoose.model('Blog', blogSchema)
// export model to be used elsewhere
module.exports = Blog