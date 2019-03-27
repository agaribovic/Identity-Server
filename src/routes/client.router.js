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

<<<<<<< HEAD
    router.route('/api/clients/:clientId/users')
    .get(ctrl.users)

=======
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
router.param('clientId', ctrl.clientById)

export default router
