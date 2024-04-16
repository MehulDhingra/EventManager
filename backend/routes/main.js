const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controller/main')

const authMiddleware = require('../middleware/auth')
const { register, scanQr } = require('../controller/register')

router.route('/signin').post(authMiddleware, dashboard)
router.route('/signup').post(login)
router.route('/register').post(register)

module.exports = router
