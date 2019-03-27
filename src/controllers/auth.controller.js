import User from "../models/user.model";
import config from "../../config";
import base64 from "../helpers/base64";
import jwt from "jsonwebtoken";

const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({ email: username }, (err, data) => {
    if (err || !data) {
<<<<<<< HEAD
      res.status(401).send("User does not exist");
=======
      res.status(401).send("User does not exists");
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
    } else {
      if (data.authenticate(password)) {
        config.currentUser = {
          _id: data._id,
          sub: data.email,
          cli: "TimeKeeper",
          role: "user",
          name: data.name,
          exp: new Date().getTime() / 1000 + 3600
        };
<<<<<<< HEAD
       // console.log(config.currentUser)
        let token = jwt.sign(config.currentUser, config.secret);
        res.status(200).send(token);
      } else {
        res.status(401).send("User does not exist");
      }
    }
  });
};
const loginMail = (req, res) => {
  let username = req.query.name
  let password = req.query.password;
  User.findOne({ email: username }, (err, data) => {
    if (err || !data) {
      res.status(401).send("User does not exist");
    } else {
      if (data.authenticate(password)) {
        config.currentUser = {
          _id: data._id,
          sub: data.email,
          cli: "TimeKeeper",
          role: "user",
          name: data.name,
          exp: new Date().getTime() / 1000 + 3600
        };
       // console.log(config.currentUser)
        let token = jwt.sign(config.currentUser, config.secret);
        res.status(200).send(token);
      } else {
        res.status(401).send("User does not exist");
=======
        let token = jwt.sign(config.currentUser, config.secret);
        res.status(200).send(token);
      } else {
        res.status(401).send("User does not exists");
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
      }
    }
  });
};

const signed = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("token: " + token);
  if (token === undefined) {
    res.status(401).send("Unathorized access");
  } else {
    jwt.verify(token.substring(7), config.secret, (err, result) => {
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        config.currentUser = result;
<<<<<<< HEAD
        //console.log(config.currentUser)//verify ovdje 
=======
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
        let exp = result.exp - new Date().getTime() / 1000;
        next();
      }
    });
  }
};

<<<<<<< HEAD
export default { login, signed,loginMail };
=======
export default { login, signed };
>>>>>>> 2136aea0917477c9e744015badb23856e768b6f2
