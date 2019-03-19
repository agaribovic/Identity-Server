import User from '../models/user.model'
import Client from '../models/client.model'
import Access from '../models/access.model'
import _ from 'lodash'

const create = (req, res) => {
    const access = new Access(req.body)
    access.save((err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            addConcerns(result)
            res.status(200).send(result)
        }
    })
}

const addConcerns = (access) => {
    User.findById(access.user, (err, user) => {
        if (!err) {
            user.clients.push(access._id)
            user.save((err) => {
                if (!err) {
                    Client.findById(access.client, (err, client) => {
                        if (!err) {
                            client.users.push(access._id)
                            client.save()
                        }
                    })
                }
            })
        }
    })
}

const list = (req, res) => {
    Access.find().populate('client', 'clientId name').populate('user', 'name')
        .exec((err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(result)
            }
        })
}

const getId = (req, res, next, id) => {
    Access.findById(id)
        .exec((err, data) => {
            if (err || !data) res.status(400).send(err)
            req.profile = data
            next()
        })
}

const read = (req, res) => {
    return res.send(req.profile)
}

const update = (req, res, next) => {
    let access = req.profile
    access = _.extend(access, req.body)
    access.save((err) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.send(access)
        }
    })
}

const remove = (req, res, next) => {
    let access = req.profile
    access.remove((err, deletedAccess) => {
        if (err) res.status(400).send(err)
        res.send(deletedAccess)
    })
}

export default { list, create, getId, read, update, remove }