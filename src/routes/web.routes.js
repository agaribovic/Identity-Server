import request from "request";
import config from "../../config";
import nodemailer from "nodemailer";

module.exports = app => {
    app.get("/", (req, res) => {
        res.render("login.ejs", { message: "", info: config.token });
    });

    app.get("/login", (req, res) => {
        res.render("login.ejs", { message: "", info: config.token });
    });

    app.get("/index", (req, res) => {
        res.render("index.ejs", { message: "" });
    });

    app.get("/profile", (req, res) => {
        res.render("profile.ejs", { message: "" });
    });

    app.get("/signup", (req, res) => {
        res.render("signup.ejs", { message: "" });
    });

    app.get("/adminUserAdd", (req, res) => {
        res.render("adminUserAdd.ejs", { message: "" });
    });

    app.get("/users", (req, res) => {
        request.get("http://localhost:5000/api/users", (err, result) => {
            res.render("users.ejs", { users: JSON.parse(result.body) });
        });
    });

    app.get("/adminUserView", (req, res) => {
        request.get("http://localhost:5000/api/users", (err, result) => {
            res.render("adminUserView.ejs", { users: JSON.parse(result.body) });
        });
    });

    app.get("/deleteUser/:id", (req, res) => {
        request.delete(
            {
                url: "http://localhost:5000/api/users/" + req.params.id,
                json: true,
                headers: { authorization: "bearer " + config.token }
            },
            (err, result) => {
                
            }
        );
        res.redirect("/adminUserView");
    });

    app.post("/login", (req, res) => {
        request.post(
            {
                url: "http://localhost:5000/auth/login",
                body: req.body,
                json: true
            },
            (err, result) => {
                if (result.statusCode == 401) {
                    res.render("login.ejs", {
                        message: "Wrong username or password!",
                        info: config.token
                    });
                } else {
                    config.token = result.body;
                    res.redirect("/adminPanel");
                }
                //console.log(result.statusCode);
            }
        );
    });

    app.post("/signup", (req, res) => {
        let flag = false;

        const regexZaIme = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
        const regexZaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexZaPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        //console.log(req.body);

        if (
            req.body.name === "" ||
            req.body.email === "" ||
            req.body.plainText === ""
        ) {
            res.render("signup.ejs", {
                message: "Please fill out all fields!",
                info: config.token
            });
            flag = true;
        } else if (regexZaIme.test(String(req.body.name)) == false) {
            res.render("signup.ejs", {
                message: "Name is not valid",
                info: config.token
            });
            flag = true;
        } else if (
            regexZaEmail.test(String(req.body.email).toLowerCase()) == false
        ) {
            res.render("signup.ejs", {
                message: "Email is not valid",
                info: config.token
            });
            flag = true;
        } else if (regexZaPassword.test(String(req.body.plainText)) == false) {
            flag = true;
            res.render("signup.ejs", {
                message:
                    "Password must contain at least one uppercase letter, one number, one symbol, and must be longer than 8 characters",
                info: config.token
            });
        }

        //console.log("IZASO");
        if (!flag) {
            request.post(
                {
                    url: "http://localhost:5000/api/users",
                    body: req.body,
                    json: true
                },
                (err, result) => {
                    if (result.body.errmsg) {
                        res.render("signup.ejs", { message: "Database write error!" });
                    } else {
                        let account = nodemailer.createTestAccount();

                        // create reusable transporter object using the default SMTP transport
                        let transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 465,
                            secure: true, // true for 465, false for other ports
                            auth: {
                                user: "zakircinjarevic@gmail.com", // generated ethereal user
                                pass: "zakir234" // generated ethereal password
                            }
                        });

                        // setup email data with unicode symbols
                        let mailOptions = {
                            from: '"apollo@identity.com', // sender address
                            to: result.body.email, // list of receivers
                            subject: "Successful registration!", // Subject line
                            text: "You have successfully registered !" // plain text body
                            //html: "<b>Hello world?</b>" // html body
                        };

                        // send mail with defined transport object
                        let info = transporter.sendMail(mailOptions);
                        //#endregion

                        res.render("login.ejs", {
                            message: "Successful signup! Please login: ",
                            created: result.body.created
                        });
                    }
                }
            );
        }
    });

    app.get("/index", (req, res) => {
        res.render("index.ejs", { message: "" });
    });

    app.get("/profile", (req, res) => {
        res.render("profile.ejs", { message: "" });
    });

    app.get("/signup", (req, res) => {
        res.render("signup.ejs", { message: "" });
    });
//USERS
//#region 
    app.get("/adminUserAdd", (req, res) => {
        res.render("adminUserAdd.ejs", { message: "" });
    });

    app.get("/users", (req, res) => {
        request.get("http://localhost:5000/api/users", (err, result) => {
            res.render("users.ejs", { users: JSON.parse(result.body) });
        });
    });

    app.get("/adminUserView", (req, res) => {
        request.get("http://localhost:5000/api/users", (err, result) => {
            res.render("adminUserView.ejs", { users: JSON.parse(result.body) });
        });
    });

    app.get("/adminEditUser/:id", (req, res) => {
        var id = req.params.id;
        request.get("http://localhost:5000/api/users/" + id, (err, result) => {
            let k = JSON.parse(result.body);
           // console.log(k);
            res.render("adminEditUser.ejs", {
                message: "",
                user: { id: k._id, name: k.name, email: k.email }
            });
        });
    });

    app.get("/deleteUser/:id", (req, res) => {
        request.delete(
            {
                url: "http://localhost:5000/api/users/" + req.params.id,
                json: true,
                headers: { authorization: "bearer " + config.token }
            },
            (err, result) => {
                //console.log(result.body);
            }
        );
        res.redirect("/adminUserView");
    });

  



    app.post("/adminEditUser", (req, res) => {
        //console.log(config.token)
        request.put(
            {
                url: "http://localhost:5000/api/users/" + req.body.id,
                headers: { authorization: "bearer " + config.token },
                body: req.body,
                json: true
            },
            (err, result) => {
                try {
                    let account = nodemailer.createTestAccount();

                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true, // true for 465, false for other ports
                        auth: {
                            user: "zakircinjarevic@gmail.com", // generated ethereal user
                            pass: "zakir234" // generated ethereal password
                        }
                    });

                    let mailOptions = {
                        from: '"apollo@identity.com',
                        to: result.body.email,
                        subject: "Your account was edited!",
                        text: `Your account with name ${result.body.name} was edited.
                      Click this link to log in. `
                        //html: "<b>Hello world?</b>" // html body
                    };

                    let info = transporter.sendMail(mailOptions);
                } catch (err) {
                    res.render("login.ejs", { message: "Sorry, there was a mistake" });
                }
                res.redirect("/adminUserView");
            }
        );
    });
//#endregion
    //CLIENTS
    //#region 
app.get("/editClient/:id", (req, res) => {
        var id = req.params.id;
        request.get("http://localhost:5000/api/clients/" + id, (err, result) => {
            let client = JSON.parse(result.body);
           // console.log(client);
            res.render("editClient.ejs", {
                message: "",
                client: {
                    id: client._id,
                    name: client.name,
                    claims: client.claims,
                    secret: client.secret,
                    redirect: client.redirect
                }
            });
        });
    });

    app.get("/editClient", (req, res) => {
        res.render("editClient.ejs", { message: "" });
    });

   
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

    
    app.get("/deleteClient/:id", (req, res) => {
        request.delete(
            {
                url: "http://localhost:5000/api/clients/" + req.params.id,
                json: true,
                headers: { authorization: "bearer " + config.token }
            },
            (err, result) => {
                console.log(result.body);
            }
        );
        res.redirect("/clients");
    });

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
            res.redirect('/clients');
        })
    })

//#endregion
    
    app.get('/assignments', (req, res) => {
        request.get('http://localhost:5000/api/users', (err, result) => {
            var all_users = JSON.parse(result.body);
            //console.log(all_users);
            request.get('http://localhost:5000/api/clients', (err, result) => {
                res.render('assignments.ejs', { message: '', users: all_users, clients: JSON.parse(result.body) })
            })
        })
    })

    app.get('/assignments/:id', (req, res) => {
        request.get('http://localhost:5000/api/users/' + req.params.id, (err, result) => {
            var user = [JSON.parse(result.body)];
            //console.log(user);
            request.get('http://localhost:5000/api/clients', (err, result) => {
                res.render('assignments.ejs', { message: '', users: user, clients: JSON.parse(result.body) })
            })
        })
    })

    app.get('/classignments/:id', (req, res) => {
        request.get('http://localhost:5000/api/clients/' + req.params.id, (err, result) => {
            var client = [JSON.parse(result.body)];
            //console.log(user);
            request.get('http://localhost:5000/api/users', (err, result) => {
                res.render('assignments.ejs', { message: '', users: JSON.parse(result.body), clients: client})
            })
        })
    })

    app.post("/assignments", (req, res) => {
        let accId;
        console.log("tijelo: ");
        console.log(req.body);

        req.body.scopes = { role: req.body.scopes, action: "", team: "" };

        request.post(
            {
                url: "http://localhost:5000/api/access",
                headers: { authorization: "bearer " + config.token },
                body: req.body,
                json: true
            },
            (err, result) => {
                accId = result.body._id;
            });

                request.put(
                    {
                        url: "http://localhost:5000/api/users/" + req.body.user,
                        headers: { authorization: "bearer " + config.token },
                        body: { clients: accId },
                        json: true
                    },
                    (err, result) => { 
                        
                    }
                );

                request.put(
                    {
                        url: "http://localhost:5000/api/clients/" + req.body.client,
                        headers: { authorization: "bearer " + config.token },
                        body: { users: accId },
                        json: true
                    },
                    (err, result) => {
                        res.redirect("/adminPanel");
                    }
                );
            
            });
    app.get("/adminPanel", (req, res) => {
        res.render("adminPanel.ejs", {
            message: "",
            info: { currentUser: config.currentUser }
        });
    });

    app.get("/adminEnableUser/:id", (req, res) => {
        var id = req.params.id;
        let enb = true;
        request.get("http://localhost:5000/api/users/" + id, (err, result) => {
            let user = JSON.parse(result.body);
            console.log(user);
            if (user.enabled === true) enb = false;
            request.put(
                {
                    url: "http://localhost:5000/api/users/" + id,
                    headers: { authorization: "bearer " + config.token },
                    body: { enabled: enb },
                    json: true
                },
                (err, result) => {
                    console.log(result.body);
                    res.redirect("/adminUserView");
                }
            );
        });
    });

    app.get("/userSelfEdit/:id", (req, res) => {
        request.get(
            "http://localhost:5000/api/users/" + config.currentUser._id,
            (err, result) => {
                let k = JSON.parse(result.body);
                //console.log(k)
                res.render("userSelfEdit.ejs", {
                    message: "",
                    user: { id: k._id, name: k.name, email: k.email }
                });
            }
        );
    });

    app.post("/userSelfEdit", (req, res) => {
        //console.log(config.token)
        request.put(
            {
                url: "http://localhost:5000/api/users/" + config.currentUser._id,
                headers: { authorization: "bearer " + config.token },
                body: req.body,
                json: true
            },
            (err, result) => {
                res.redirect("/adminPanel");
            }
        );
    });

    app.post("/adminUserAdd", (req, res) => {
        let flag = false;

        const regexZaIme = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
        const regexZaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexZaPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        console.log(req.body);

        if (
            req.body.name === "" ||
            req.body.email === "" ||
            req.body.plainText === ""
        ) {
            res.render("signup.ejs", {
                message: "Molimo popunite sva polja!",
                info: config.token
            });
            flag = true;
        } else if (regexZaIme.test(String(req.body.name)) == false) {
            res.render("signup.ejs", {
                message: "Ime nije validno",
                info: config.token
            });
            flag = true;
        } else if (
            regexZaEmail.test(String(req.body.email).toLowerCase()) == false
        ) {
            res.render("signup.ejs", {
                message: "Email nije validan",
                info: config.token
            });
            flag = true;
        } else if (regexZaPassword.test(String(req.body.plainText)) == false) {
            flag = true;
            res.render("signup.ejs", {
                message:
                    "Password must contain at least one uppercase letter, one number, one symbol, and must be longer than 8 characters",
                info: config.token
            });
        }
        if (!flag) {
            request.post(
                {
                    url: "http://localhost:5000/api/users",
                    body: req.body,
                    json: true
                },
                (err, result) => {
                    if (result.body.errmsg) {
                        res.render("signup.ejs", { message: "Eror upisa u bazu!" });
                    } else res.redirect("/adminUserView");
                }
            );
        }
    });

    app.get("/adminEnableClient/:id", (req, res) => {
        var id = req.params.id;
        let enb = true;
        request.get("http://localhost:5000/api/clients/" + id, (err, result) => {
            let user = JSON.parse(result.body);
            //console.log(user)
            if (user.enabled === true) enb = false;
            request.put(
                {
                    url: "http://localhost:5000/api/clients/" + id,
                    headers: { authorization: "bearer " + config.token },
                    body: { enabled: enb },
                    json: true
                },
                (err, result) => {
                    console.log(result.body);
                    res.redirect("/clients");
                }
            );
        });
    });

    app.get("/usersClients/:id", (req, res) => {
        request.get(
            "http://localhost:5000/api/users/" + req.params.id + "/clients",
            (err, result) => {
                let sendResult = JSON.parse(result.body);
                console.log(sendResult.clients)
                res.render("usersClients.ejs", { props: sendResult.clients });
            }
        );
    });

    app.get("/clientsUsers/:id", (req, res) => {
        request.get(
            "http://localhost:5000/api/clients/" + req.params.id + "/users",
            (err, result) => {
                 let sendResult = JSON.parse(result.body);
                 console.log(sendResult.users)
                 res.render("clientsUsers.ejs", { props: sendResult.users });
            }
        );
    });
};
