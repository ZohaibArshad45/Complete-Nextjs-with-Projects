import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    authorname : String,
    title : String,
    description : String
})

const Blog = mongoose.module.Blog || mongoose.model ('Blog', BlogSchema )

export default Blog