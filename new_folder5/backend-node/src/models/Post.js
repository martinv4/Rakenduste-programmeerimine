const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  textbody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post