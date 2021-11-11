const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, required: true },
  authorId: {type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String }
});

const Post = model("Post", postSchema)

module.exports = Post