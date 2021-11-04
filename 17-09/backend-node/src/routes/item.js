const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.post("/create", itemController.createItem)
router.put("/updateQuality/:id", itemController.updateItemByQuality)
router.put("/update/:id", itemController.updateItem)
router.delete("/delete/:id", itemController.deleteItem)

module.exports = router