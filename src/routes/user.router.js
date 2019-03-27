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

<<<<<<< HEAD
router.route('/api/users/:id/clients')//works
=======
router.route('/api/users/:id/clients')
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
    .get(ctrl.clients)

router.param('id', ctrl.getId)

export default router
