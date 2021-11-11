const router = require("express").Router()
const postController = require("../controllers/post")

router.get("/get-posts", postController.getPosts)
router.get("/get-post/:id", postController.getPost)
router.post("/create-post", postController.createPost)
router.delete("/delete-post/:id", postController.deletePost)
router.put("/update-post/:id", postController.updatePost)

module.exports = router