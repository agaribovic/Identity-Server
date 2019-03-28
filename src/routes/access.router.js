import express from 'express'
import ctrl from '../controllers/access.controller'
import auth from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/access')
    .get(ctrl.list)
    .post(ctrl.create)

router.route('/api/access/:id')
    .get(ctrl.read)
    .put(ctrl.update)
    .delete(ctrl.remove)

router.param('id', ctrl.getId)

export default router
