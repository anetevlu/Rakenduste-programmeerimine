const jwt = require('jsonwebtoken')

const jwtAuth = (req, res, next) => {
    try {
        if(!req.headers['authorization']) throw Error('Access denied')
         //Authorization: bearer - 1, token - 2
        const accesToken = req.headers.authorization.split(' ')[1]

        const decoded = jwt.verify(accesToken, process.env.JWT_SECRET)
        req.user = decoded

        next()
    } catch (error) {
        return res.status(401).send({ error: error.message})
    }
}

module.exports = jwtAuth