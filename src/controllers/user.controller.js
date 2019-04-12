import User from '../models/user.model'
import Access from '../models/access.model'
import Client from '../models/client.model'
import logger from '../helpers/logger'
import _ from 'lodash'

const create = (req, res) => {
    let user = new User(req.body)
    user.stringCreated=user.created.toString().substring(3,15)
    user.save((err, result) => {
        if (err) {
            logger.error(err.errmsg)
            console.log(err)
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
const unassign = (req,res) =>{

    res.status(200).send('Hello')
}
const remove = (req, res) => {
    let user = req.profile
    user.remove((err, deletedUser) => {
        if (err) res.status(400).send(err)
        deletedUser.password = undefined
        deletedUser.salt = undefined

    
        let clientsi = deletedUser.clients;
        for(let i = 0; i < clientsi.length; i++){
            Access.findByIdAndRemove(clientsi[i]._id ,(err, result) =>{
                if(err){
                    res.status(400).send(err);
                }else{

                    let accessId = result._id;
                    let clientId = result.client;
                    let arrayOfUsers;
                    Client.findById(clientId, (err, result2) =>{
                        if(err){
                            res.status(400).send(err);
                        }else{
                            arrayOfUsers = result2.users;
                            for(let j = 0; j < arrayOfUsers.length; j++){
                                if(arrayOfUsers[j].toString() == accessId.toString()){
                                    arrayOfUsers.splice(j,1);
                                    break;
                                }
                            }
                        }
                        result2.save((err) =>{
                            if(err){
                                res.status(400).send(err);
                            }
                        })
                    })
                }
            })
        }
        res.send(deletedUser)
    })
}

const clients = (req, res) => {//prof's
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
        .populate('client', 'clientId name redirect stringCreated')//additional population fields
        .exec((err, data) => {
            if (!err) result.clients = data
            res.status(200).send(result)
        })
}

export default { list, create,unassign, getId, read, update, remove, clients }