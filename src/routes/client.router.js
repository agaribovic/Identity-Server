import express from 'express'
import ctrl from '../controllers/client.controller'
import auth from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/clients')
    .get(ctrl.list)
    .post(ctrl.create)

router.route('/api/clients/:clientId')
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove)

    router.route('/api/clients/:clientId/users')
    .get(ctrl.users)

router.param('clientId', ctrl.clientById)

export default router
