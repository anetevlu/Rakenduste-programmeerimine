const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = await createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}

exports.updateItemByQuality = async (req, res) => {
    const { id } = req.params;
    const item = await Item.findOneAndUpdate({ _id: id }, { $inc: {quality: 1} }, {new: true})
    if(!item) res.status(404).send("No item found with the id")
    res.status(200).send(`Success! item: \n ${item}`)
}

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const newUpdates = req.body;
    const item = await Item.findOneAndUpdate({ _id: id }, newUpdates, {new: true})
    if(!item) res.status(404).send("No item found with the id")
    res.status(200).send(`Success! item: \n ${item}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)
}