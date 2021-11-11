require('dotenv').config()
const jwtAuth = require('./middleware/jwtAuth')
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

const app = express()
app.use(express.json());

//src - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
app.use(function(req, res, next) {  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader('Access-Control-Allow-Credentials', true)
  next();
});

app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
  

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/secret", jwtAuth, (req, res) => {
  res.send("secret Hello world!")
})

app.get("*", (req, res) => {
  res.send('This route does not exist!')
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
