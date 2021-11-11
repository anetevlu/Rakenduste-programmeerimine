const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
    const posts = await Post.find({})
    res.status(200).send(posts)
}

exports.getPost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findOne({ _id:id })
    res.status(200).send(post)
}

exports.createPost = async (req, res) => {
    const { title, authorId } = req.body

    try {
        const newPost = new Post({
            title,
            authorId
        })

        const createdPost = new Post(newPost)
        
        const savedPost = await createdPost.save()
        if(!savedPost) throw Error('Error saving post')

        res.status(200).send(savedPost)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
   
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;
  
    const post = await Post.findOneAndDelete({ _id: id })
  
    if (!post) res.status(404).send("No post with that id found")
  
    res.status(200).send(post._id)
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const post = await Post.findOneAndUpdate({ _id: id }, updates, {new: true})
    if(!post) res.status(404).send("No post found with the id")
    res.status(200).send('Updated!')
}

