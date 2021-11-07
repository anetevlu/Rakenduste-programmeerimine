const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if(!user) throw Error('Wrong E-mail!')

        const isMatch = bycrypt.compare(user, user.password)
        if(!isMatch) throw Error('Wrong password or E-mail!')
        const userTemplate = {
            id : user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email
        }

        const token = jwt.sign(userTemplate, process.env.JWT_SECRET)
        if(!token) throw Error('Something bad happened...')

        res.status(200).json({
            token,
            ...userTemplate
        })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if(user) throw Error('User with that E-mail already exists!')

        const salt = await bycrypt.genSalt(10)
        if(!salt) throw Error('Somethinh critical...')

        const hash = await bycrypt.hash(password, salt)
        if(!hash) throw Error('Something critical again...')

        const newUser = new User({ 
            firstName,
            lastName,
            email,
            password: hash
        })

        const savedUser = await newUser.save()
        if(!savedUser) throw Error('Error saving user')

        res.status(200).json({ message: 'User created!' })
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}