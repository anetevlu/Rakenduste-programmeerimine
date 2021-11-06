require('dotenv').config()
const jwtAuth = require('./middleware/jwtAuth')
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/auth');

const app = express()
app.use(express.json());

app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/secret", jwtAuth, (req, res) => {
  res.send("secret Hello world!")
})

app.get("*", (req, res) => {
  res.send("This route does not exist!")
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
