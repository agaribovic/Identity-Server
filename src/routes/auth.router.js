import express from 'express'
import auth from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/login').post(auth.login)

router.route('/auth/autolog').post(auth.autolog)

export default router