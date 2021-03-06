import User from '../models/user.model'
import Client from '../models/client.model'
import Access from '../models/access.model'
import config from "../../config";
import base64 from "../helpers/base64";
import jwt from "jsonwebtoken";
import _ from 'lodash'

const login = (req, res) => { // znaci clientId problem, jer ga nemam, mozda po name ?
  //console.log(req.body)
  let username = req.body.username
  let password = req.body.password
  let clientId = req.body.from
  if (!clientId) clientId = 'IS'
  //console.log(clientId)
  User.findOne({ 'email': username }, (err, userData) => {
    if (err || !userData) {
      //console.log("user")
      res.status(401).send('User does not exist')
    } 
    if(!_.isEmpty(userData))
    if(userData.enabled==false)
    {
      res.status(403).send('Your account is not enabled')
    }
    
    else {
      // if(!userData.enabled)   
      // res.status(401).send('User is not enabled'); TODO
      if (userData.authenticate(password)) {
        Client.findOne({ 'clientId': clientId }, (err, clientData) => {
          if (err || !clientData) {
            //console.log(clientData,'does not exist')
            res.status(404).send('Client does not exist')
          } else {
            Access.findOne({ 'user': userData._id, 'client': clientData._id }, (err, accessData) => {
              if (err || !accessData) {
                //console.log('denied')
               
                res.status(401).send('Access denied')
              } else {
                // console.log(accessData.scopes)
                config.currentUser = {
                  _id: userData._id,
                  sub: userData.email,
                  cli: clientData.name,
                  scopes: accessData.scopes,
                  role:accessData.scopes[0].role,
                  name: userData.name,
                  exp: new Date().getTime() / 1000 + 3600
                }
                // console.log(config.currentUser)
                let token = jwt.sign(config.currentUser, clientData.secret/*config.secret*/)
                res.status(200).send({ token: token, url: clientData.redirect })
              }
            })
          }
        })
      } else {
        res.status(401).send('User does not exist')
      }
    }
  })
}

const autolog = (req, res) => {
  jwt.verify(req.body.token, config.secret, (err, result) => {
      if (err) {
          res.status(401).json({ error: err })
      } else {
          let username = result.sub
          let clientId = req.body.client
          if (clientId === undefined) clientId = 'IS'
          User.findOne({ 'email': username }, (err, userData) => {
              if (err || !userData) {
                  res.status(401).send("noAccess")
              } else {
                  Client.findOne({ 'clientId': clientId }, (err, clientData) => {
                      if (err || !clientData) {
                          res.status(404).send("noAccess")
                      } else {
                          Access.findOne({ 'user': userData._id, 'client': clientData._id }, (err, accessData) => {
                              if (err || !accessData) {
                                  res.status(401).send("noAccess")
                              } else {
                                  config.currentUser = {
                                      id: userData._id,
                                      sub: userData.email,
                                      name: userData.name,
                                      clId: clientData.clientId,
                                      cli: clientData.name,
                                      scopes: accessData.scopes,
                                      enabled: userData.enabled,
                                      exp: new Date().getTime() / 1000 + 3600
                                  }
                                  config.token = jwt.sign(config.currentUser, clientData.secret)
																	console.log("TCL: autolog -> secret", clientData.secret)
                                  console.log("TCL: autolog -> redirect", clientData.redirect)

                                  let result = {
                                      url: clientData.redirect,
                                      token: config.token
                                  }
                                  res.status(200).send(result)
                              }
                          })
                      }
                  })
              }
          })
      }
  })
}

const signed = (req, res, next) => {
  let token = req.headers.authorization;
  //console.log("token: " + token);
  if (token === undefined) {
    res.status(401).send("Unathorized access");
  } else {
    jwt.verify(token.substring(7), config.secret, (err, result) => {
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        config.currentUser = result;

        let exp = result.exp - new Date().getTime() / 1000;
        
        next();
      }
    });
  }
};

export default { login, signed ,autolog};



