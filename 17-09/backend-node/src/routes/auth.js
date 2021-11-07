const router = require("express").Router()
const authController = require("../controllers/auth")
const validationMiddleware = require("../middleware/validationMiddleWare")
const { check } = require('express-validator')

router.post("/login", [
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Must be correctly formatted E-mail.'),
    check('password')
        .isLength({ min: 6})
        .withMessage('Must be at least 6 characters long.')
], validationMiddleware, authController.login)

router.post("/signup", [
    check('firstName')
        .isLength({ min: 3})
        .withMessage('Must be at least 3 characters long.')
        .trim()
        .exists()
        .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
        .withMessage('Must be alphabetic.'),
    check('lastName')
        .isLength({ min: 3})
        .withMessage('Must be at least 3 characters long.')
        .trim()
        .exists()
        .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
        .withMessage('Must be alphabetic.'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Must be correctly formatted E-mail.'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Must be at least 6 characters long.')
], validationMiddleware, authController.signup)

module.exports = router