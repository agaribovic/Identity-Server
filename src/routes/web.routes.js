import request from 'request'
import config from '../../config'
import nodemailer from 'nodemailer'
//PONESI U HEDERU I TOKEN
module.exports = (app) => {

    app.get('/', (req, res) => { res.render('login.ejs', { message: '', info: config.token }) })

    app.get('/login', (req, res) => {
        console.log(req.body);
        if (req.body.created) res.render('login.ejs', { message: 'USJEPEŠNO STE SE SAJNAPALI', info: config.token });
        else res.render('login.ejs', { message: '', info: config.token })
    })

    app.get('/index', (req, res) => { res.render('index.ejs', { message: '' }) })

    app.get('/profile', (req, res) => { res.render('profile.ejs', { message: '' }) })

    app.get('/signup', (req, res) => { res.render('signup.ejs', { message: '', user: { id: 55, name: 'John Doe' } }) })

    app.get('/adminUserAdd', (req, res) => { res.render('adminUserAdd.ejs', { message: '', user: { id: 55, name: 'John Doe' } }) })

    app.get('/users', (req, res) => {
        request.get('http://localhost:5000/api/users', (err, result) => {
            res.render('users.ejs', { users: JSON.parse(result.body) })
        })
    })

    app.get('/adminUserView', (req, res) => {
        request.get('http://localhost:5000/api/users', (err, result) => {
            res.render('adminUserView.ejs', { users: JSON.parse(result.body) })
        })
    })

    app.get('/deleteUser/:id', (req, res) => {
        request.delete({
            url: 'http://localhost:5000/api/users/' + req.params.id,
            json: true,
            headers: { authorization: "bearer " + config.token }
        }, (err, result) => {
            console.log(result.body);
        })
        res.redirect('/adminUserView')
    })

    app.post('/login', (req, res) => {
        request.post({
            url: 'http://localhost:5000/auth/login',
            body: req.body,
            json: true
        }, (err, result) => {
            if (result.statusCode == 401) {
                res.render('login.ejs', { message: 'User does not exist', info: config.token })
            }
            else {
                config.token = result.body
                res.redirect('/adminPanel')
            }
            console.log(result.statusCode)
        })
    })
    app.post('/loginMail/:mail', (req, res) => {
        request.post({
            url: 'http://localhost:5000/auth/loginMail/'+ '?mail='+req.query.email,
            body: req.body,
            json: true
        }, (err, result) => {
            if (result.statusCode == 401) {
                res.render('login.ejs', { message: 'User does not exist', info: config.token })
            }
            else {
                config.token = result.body
                res.redirect('/adminPanel')
            }
            console.log(result.statusCode)
        })
    })

    app.post('/signup', (req, res) => {
        request.post({
            url: 'http://localhost:5000/api/users',
            body: req.body,
            json: true
        }, (err, result) => {
            
            let account =  nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: 'zakircinjarevic@gmail.com', // generated ethereal user
                pass: 'zakir234' // generated ethereal password
              }
            });
          
            // setup email data with unicode symbols
            let mailOptions = {
              from: '"apollo@identity.com', // sender address
              to: result.body.email, // list of receivers
              subject: "Successful registration!", // Subject line
              text: "You have successfully registered !", // plain text body
              //html: "<b>Hello world?</b>" // html body
            };
          
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions)

            res.render('login.ejs', { message: 'Successful registration! Please login: ', created: result.body.created })
        })
    })

    app.get('/adminEditUser/:id', (req, res) => {
        var id = req.params.id
        request.get('http://localhost:5000/api/users/' + id, (err, result) => {
            let k = JSON.parse(result.body)
            console.log(k)
            res.render('adminEditUser.ejs', { message: '', user: { id: k._id, name: k.name, email: k.email } })
        })
    })

    app.post('/adminEditUser', (req, res) => {
        //console.log(config.token)
        request.put({
            url: 'http://localhost:5000/api/users/' + req.body.id,
            headers: { authorization: "bearer " + config.token },
            body: req.body,
            json: true
        }, (err, result) => {

            try{
            let account =  nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: 'zakircinjarevic@gmail.com', // generated ethereal user
                pass: 'zakir234' // generated ethereal password
              }
            });
          
            // setup email data with unicode symbols
            let mailOptions = {
              from: '"apollo@identity.com', // sender address
              to: result.body.email, // list of receivers
              subject: "Your account was edited!", // Subject line
              text: `Your account with name ${result.body.name} was edited.
              Click this link to log in. `, // plain text body
              //html: "<b>Hello world?</b>" // html body
            };
          
            // send mail with defined transport object
            let info = transporter.sendMail(mailOptions)
        }
        catch(err){
            res.render('login.ejs', { message: 'Sorry, there was a mistake'})
        }

            res.redirect('/adminUserView')
        })
    })

    //ZAKINE
    app.get('/editClient/:id', (req, res) => {
        var id = req.params.id
        request.get('http://localhost:5000/api/clients/' + id, (err, result) => {
            let client = JSON.parse(result.body)
            console.log(client)
            res.render('editClient.ejs', { message: '', client: { id: client._id, name: client.name, claims: client.claims, secret: client.secret, redirect: client.redirect } })
        })
    })

    app.post('/editClient', (req, res) => {
        request.put({
            url: 'http://localhost:5000/api/clients/' + req.body.id,
            body: req.body,
            json: true
        }, (err, result) => {
            console.log(err)
            res.redirect('/clients')
        })
    })

    app.get('/editClient', (req, res) => { res.render('editClient.ejs', { message: '' }) })

    app.get('/deleteClient/:id', (req, res) => {
        request.delete({
            url: 'http://localhost:5000/api/clients/' + req.params.id,
            json: true,
            headers: { authorization: "bearer " + config.token }
        }, (err, result) => {
            console.log(result.body);
        })
        res.redirect('/clients')
    })

    app.get('/deleteClient', (req, res) => { res.render('deleteClient.ejs', { message: '' }) })

    app.get('/clients', (req, res) => {
        request.get('http://localhost:5000/api/clients', (err, result) => {
            res.render('clients.ejs', { clients: JSON.parse(result.body) })
        })
    })

    app.get('/AddAClient', (req, res) => { res.render('AddAClient.ejs', { message: '' }) })

    app.post('/AddAClient', (req, res) => {
        request.post({
            url: 'http://localhost:5000/api/clients',
            body: req.body,
            json: true
        }, (err, result) => {
            //console.log(result.statusCode, result.body)
        })
        res.redirect('/clients')
    })


    app.get('/assignments', (req, res) => {
        request.get('http://localhost:5000/api/users', (err, result) => {
            var all_users = JSON.parse(result.body);
            request.get('http://localhost:5000/api/clients', (err, result) => {
                res.render('assignments.ejs', { message: '', users: all_users, clients: JSON.parse(result.body) })
            })
        })

    })

    app.post('/assignments', (req, res) => {
        let accId;

        req.body.scopes = { role: req.body.scopes, action: '', team: '' }

        request.post({
            url: 'http://localhost:5000/api/access',
            headers: { authorization: "bearer " + config.token },
            body: req.body,
            json: true
        }, (err, result) => {
            accId = result.body._id

            request.put({
                url: 'http://localhost:5000/api/users/' + req.body.user,
                headers: { authorization: "bearer " + config.token },
                body: { clients: accId },
                json: true
            }, (err, result) => {
            })

            request.put({
                url: 'http://localhost:5000/api/clients/' + req.body.client,
                headers: { authorization: "bearer " + config.token },
                body: { users: accId },
                json: true
            }, (err, result) => {
                res.redirect('/index');
            })
        })
    })
    app.get('/adminPanel', (req, res) => {
        console.log(config.currentUser)
        res.render('adminPanel.ejs', { message: '', info: { currentUser: config.currentUser } })
    })

    app.get('/adminEnableUser/:id', (req, res) => {
        var id = req.params.id
        let enb = true;
        request.get('http://localhost:5000/api/users/' + id, (err, result) => {
            let user = JSON.parse(result.body);
            console.log(user)
            if (user.enabled === true) enb = false;
            request.put({
                url: 'http://localhost:5000/api/users/' + id,
                headers: { authorization: "bearer " + config.token },
                body: { enabled: enb },
                json: true
            }, (err, result) => {
                console.log(result.body)
                res.redirect('/adminUserView')
            })
        })
    })
    
    

    app.get('/userSelfEdit/:id', (req, res) => {
        request.get('http://localhost:5000/api/users/' + config.currentUser._id, (err, result) => {
            let k = JSON.parse(result.body)
            //console.log(k)
            res.render('userSelfEdit.ejs', { message: '', user: { id: k._id, name: k.name, email: k.email } })
        })
    })


    app.post('/userSelfEdit', (req, res) => {
        //console.log(config.token)
        request.put({
            url: 'http://localhost:5000/api/users/' + config.currentUser._id,
            headers: { authorization: "bearer " + config.token },
            body: req.body,
            json: true
        }, (err, result) => {

            Email.send({
                Host : "smtp.gmail.com",
                Username : "zakircinjarevic",
                Password : "zakir234",
                To : result.email,
                From : "ApolloIdentity@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            })
            res.redirect('/adminPanel')
        })
    })
    app.get('/userSelfEdit', (req, res) => { res.render('userSelfEdit.ejs', { message: '' }) })
}
