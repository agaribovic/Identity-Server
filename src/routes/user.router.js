import express from 'express'
import ctrl from '../controllers/user.controller'
import auth from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
    .get(ctrl.list)
    .post(ctrl.create)

router.route('/api/users/:id')
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove)

router.route('/api/users/:id/clients')//works
    .get(ctrl.clients)

router.param('id', ctrl.getId)

export default router
