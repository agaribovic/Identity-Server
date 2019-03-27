import User from '../models/user.model'
import Access from '../models/access.model'
<<<<<<< HEAD
import logger from '../helpers/logger'
=======
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
import _ from 'lodash'

const create = (req, res) => {
    let user = new User(req.body)
<<<<<<< HEAD
    user.stringCreated=user.created.toString().substring(3,15)
    user.save((err, result) => {
        if (err) {
            logger.error(err.errmsg)
            console.log(err)
=======
    user.save((err, result) => {
        if (err) {
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
            res.status(400).send(err)
        } else {
            res.status(200).send(result)
        }
    })
}

const list = (req, res) => {
    User.find().populate('clients')
        .exec((err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(result)
            }
        })
}

const getId = (req, res, next, id) => {
    User.findById(id)
        .exec((err, data) => {
            if (err || !data) res.status(400).send(err)
            req.profile = data
            next()
        })
}

const read = (req, res) => {
    req.profile.password = undefined
    req.profile.salt = undefined
    return res.send(req.profile)
}

const update = (req, res) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.save((err) => {
        if (err) {
             res.status(400).send(err)
        } else {
            user.password = undefined
            user.salt = undefined
            res.send(user)
        }
    })
}

const remove = (req, res) => {
    let user = req.profile
<<<<<<< HEAD
    user.remove((err, deletedUser) => {
        if (err) res.status(400).send(err)
        deletedUser.password = undefined
=======
    //console.log("DOSOO DO REMOVEEAAAAA")
    user.remove((err, deletedUser) => {
        if (err) res.status(400).send(err)
        //deletedUser.password = undefined
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
        deletedUser.salt = undefined
        res.send(deletedUser)
    })
}

<<<<<<< HEAD
const clients = (req, res) => {//prof's
=======
const clients = (req, res) => {
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
    let result = {
        user: {
            name: req.profile.name,
            email: req.profile.email,
            enabled: req.profile.enabled
        },
        clients: []
    }
    Access.find({ user: req.profile._id })
        .select('scopes')
<<<<<<< HEAD
        .populate('client', 'clientId name redirect stringCreated')//additional population fields
=======
        .populate('client', 'clientId name')
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
        .exec((err, data) => {
            if (!err) result.clients = data
            res.status(200).send(result)
        })
}

export default { list, create, getId, read, update, remove, clients }