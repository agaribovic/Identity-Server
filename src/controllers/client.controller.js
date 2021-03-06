import Client from '../models/client.model'
import User from '../models/user.model'
import base64 from '../helpers/base64'
import Access from '../models/access.model'
import logger from '../helpers/logger'
import _ from 'lodash'

const create = (req, res) => {
    let client = new Client(req.body)
    client.secret = base64.encode(client.secret)
    client.stringCreated=client.created.toString().substring(3,15)
    client.save((err, result) => {
        if (err) {
            return res.status(400).send(err)
        } else {
            return res.status(200).send(result)
        }
    })
 }


const list = (req, res) => {
    Client.find()
        .exec((err, result) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                return res.status(200).send(result)
            }
        })
}

const clientById = (req, res, next, id) => {
    Client.findById(id)
        .exec((err, data) => {
            if (err) {
                res.status(400).send(err)
            } else {
                req.profile = data
                next()
            }
        })
}

const read = (req, res) => {
    return res.json(req.profile)
}

const update = (req, res) => {
    let client = req.profile
    client = _.extend(client, req.body)
    client.save((err) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.send(client)
        }
    })
}

const remove = (req, res) => {
    let client = req.profile
    client.remove((err, deletedClient) => {
        if (err) res.status(400).send(err)
    
        let clientsi = deletedClient.users;
        for(let i = 0; i < clientsi.length; i++){
            Access.findByIdAndRemove(clientsi[i]._id ,(err, result) =>{
                if(err){
                    res.status(400).send(err);
                }else{

                    let accessId = result._id;
                    let clientId = result.user;
                    let arrayOfUsers;
                    User.findById(clientId, (err, result2) =>{
                        if(err){
                            res.status(400).send(err);
                        }else{
                            arrayOfUsers = result2.clients;
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
            res.send(deletedClient)
    })
}


const users = (req, res) => {//sumejja
    //console.log(req)
    let result = {
        client: {
            id: req.profile._id,
            name: req.profile.name,
            clientId: req.profile.clientId,
            enabled: req.profile.enabled
        },
        users: []
    }
    Access.find({ client: req.profile._id })
        .select('scopes')
        .populate('user', 'email name stringCreated')
        .exec((err, data) => {
            if (err) {
                logger.error(err.errmsg)
                res.status(400).send(err)
            } else {
                result.users = data
                res.status(200).send(result)
            }
        })
}

export default { list, create, clientById, read, update, remove, users }
