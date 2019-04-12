import request from "request";
import config from "../../config";
import nodemailer from "nodemailer";
import _ from "lodash";

function sendMail(mailTo, mailSubject, mailBody) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "zakircinjarevic@gmail.com",
      pass: "zakir234"
    }
  });
  let mailOptions = {
    from: '"apollo@identity.com',
    to: mailTo,
    subject: mailSubject,
    text: mailBody
    //html: "<b>Hello world?</b>" // html body
  };

  let info = transporter.sendMail(mailOptions);
  //#endregion
}
module.exports = app => {
  app.get("/", (req, res) => {
    // config.currentUser = {}
    // config.token = ''

    //     res.render("login.ejs", { message: "", client: '', info: config.token,client:config.client });
    config.currentUser = {};
    config.token = "";
    config.client = req.query.client;
    if (config.client == undefined) config.client = "IS";
    //console.log(config.client)
    if (config.client == undefined)
      res.render("login.ejs", { message: "", client: "", info: config.token });
    else {
      res.render("login.ejs", {
        message: "",
        client: config.client,
        info: config.token
      });
    }
  });

  app.get("/login", (req, res) => {
    config.currentUser = {};
    config.token = "";
    config.client = req.query.client;
    if (config.client == undefined) config.client = "IS";
    //console.log(config.client)
    if (config.client == undefined)
      res.render("login.ejs", { message: "", client: "", info: config.token });
    else {
      res.render("login.ejs", {
        message: "",
        client: config.client,
        info: config.token
      });
    }
  });
  app.post("/login", (req, res) => {
    let from = req.body.from;
    request.post(
      {
        url: config.IdentityRoute + "/auth/login",
        body: req.body,
        json: true
      },
      (err, result) => {
        if (result.statusCode == 401) {
          res.render("login.ejs", {
            message: "Access unauthorized",
            info: config.token,
            client: config.client
          });
        } else if (result.statusCode == 403) {
          res.render("login.ejs", {
            message:
              "Your account is not activated. Please contact your administrator",
            info: config.token,
            client: config.client
          });
        } else {
          config.token = result.body.token;
          let whereToGo;
          request.get(config.IdentityRoute + "/api/clients/", (err, result) => {
            let clientsForRedirects = JSON.parse(result.body);
            clientsForRedirects.forEach(item => {
              if (item.name == from) {
                whereToGo = item.redirect;
              } else if (whereToGo == undefined)
                whereToGo = "http://localhost:5000";
            });
            if (whereToGo != "http://localhost:5000")
              res.redirect(whereToGo + "/auth/login?token=" + config.token);
            else res.redirect("http://localhost:5000/adminPanel");
          });
        }
      }
    );
  });

  app.post("/signup", (req, res) => {
    //config.client=req.body.from
    if(config.client===undefined)
    config.client="IS"
    let flag = false;
    const regexZaIme = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    const regexZaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexZaPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.plainText === ""
    ) {
      res.render("signup.ejs", {
        message: "Please fill out all fields!",
        info: config.token,
        client: config.client
      });
      flag = true;
    } else if (regexZaIme.test(String(req.body.name)) == false) {
      res.render("signup.ejs", {
        message: "Name is not valid",
        info: config.token,
        client: config.client
      });
      flag = true;
    } else if (
      regexZaEmail.test(String(req.body.email).toLowerCase()) == false
    ) {
      res.render("signup.ejs", {
        message: "Email is not valid",
        info: config.token,
        client: config.client
      });
      flag = true;
    } else if (regexZaPassword.test(String(req.body.plainText)) == false) {
      flag = true;
      res.render("signup.ejs", {
        message:
          "Password must contain at least one uppercase letter, one number, one symbol, and must be longer than 8 characters",
        info: config.token,
        client: config.client
      });
    }

    if (!flag) {
      request.post(
        {
          url: config.IdentityRoute + "/api/users",
          body: req.body,
          json: true
        },
        (err, result) => {
          if (result.body.errmsg) {
            res.render("signup.ejs", {
              message: "Email already exists!",
              client: config.client
            });
          } else {
            sendMail(
              result.body.email,
              "Successful registration!",
              "You have successfully registered ! Please wait for your confirmation mail."
            );

            let whereToGo;
            request.get(
              config.IdentityRoute + "/api/clients/",
              (err, result) => {
                let clientsForRedirects = JSON.parse(result.body);

                clientsForRedirects.forEach(item => {
                  if (item.name == config.client) {
                    whereToGo = item.redirect;
                  }
                });
                //res.redirect(whereToGo + '?token=' + config.token)
                //console.log(whereToGo)
                if (whereToGo == undefined)
                  res.redirect("http://localhost:5000/");
                else res.redirect(whereToGo);
              }
            );
            // res.render("login.ejs", {
            //     message: "Successful signup! Please login: ",
            //     created: result.body.created
            // });
            //res.redirect('C:/Projects/TimeKeeper(5.3)/landingPage.html')
          }
        }
      );
    }
  });

  app.get("/signup", (req, res) => {
    config.client = req.query.client;
    console.log(config.client)
    if (config.client === undefined) config.client = "IS";
    res.render("signup.ejs", { message: "", client: config.client });
  });

  app.get("/profile", (req, res) => {
    res.render("profile.ejs", { message: "" });
  });
  //USERS
  //#region
  app.get("/adminUserAdd", (req, res) => {
    res.render("adminUserAdd.ejs", { message: "" });
  });

  app.get("/users", (req, res) => {
    request.get(config.IdentityRoute + "/api/users", (err, result) => {
      res.render("users.ejs", { users: JSON.parse(result.body) });
    });
  });

  app.get("/adminUserView", (req, res) => {
    request.get(config.IdentityRoute + "/api/users", (err, result) => {
      res.render("adminUserView.ejs", { users: JSON.parse(result.body) });
    });
  });

  app.get("/adminEditUser/:id", (req, res) => {
    var id = req.params.id;
    request.get(config.IdentityRoute + "/api/users/" + id, (err, result) => {
      let k = JSON.parse(result.body);
      // console.log(k);
      res.render("adminEditUser.ejs", {
        message: "",
        user: { id: k._id, name: k.name, email: k.email }
      });
    });
  });

  app.get("/UnassignUserFromClient/:id", (req, res) => {
    let clientId = req.params.id;
    let userId = req.query.user;
    //  let accessId
    request.get(
      config.IdentityRoute + "/api/users/" + userId + "/clients",
      (err, result) => {
        let foundUser = JSON.parse(result.body);
        foundUser.clients.forEach(access => {
          if (access.client._id == clientId) {
            var accessId = access._id;

            request.get(
              config.IdentityRoute + "/api/users/" + userId,
              (err, result) => {
                foundUser = JSON.parse(result.body);

                request.delete(
                    {
                      url: config.IdentityRoute + "/api/access/" + accessId,
                      json: true,
                      headers: { authorization: "bearer " + config.token }
                    },
                    (err, result) => {
                        res.redirect('/usersClients/'+userId)
                    }
                  );
              }
            );
          }
        });
      }
    );
  });

  app.get("/deleteUser/:id", (req, res) => {
    request.delete(
      {
        url: config.IdentityRoute + "/api/users/" + req.params.id,
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
        url: config.IdentityRoute + "/api/users/" + req.body.id,
        headers: { authorization: "bearer " + config.token },
        body: req.body,
        json: true
      },
      (err, result) => {
        try {
          sendMail(
            result.body.email,
            "Your account was edited!",
            `Your account with name ${result.body.name} was edited.
                    Click this link to log in. `
          );
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
    request.get(config.IdentityRoute + "/api/clients/" + id, (err, result) => {
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

  app.post("/editClient", (req, res) => {
    request.put(
      {
        url: config.IdentityRoute + "/api/clients/" + req.body.id,
        body: req.body,
        json: true
      },
      (err, result) => {
        console.log(err);
        res.redirect("/clients");
      }
    );
  });

  // app.get('/editClient', (req, res) => { res.render('editClient.ejs', { message: '' }) })

  app.get("/deleteClient/:id", (req, res) => {
    request.delete(
      {
        url: config.IdentityRoute + "/api/clients/" + req.params.id,
        json: true,
        headers: { authorization: "bearer " + config.token }
      },
      (err, result) => {
        //console.log(result.body);
      }
    );
    res.redirect("/clients");
  });

  app.get("/deleteClient", (req, res) => {
    res.render("deleteClient.ejs", { message: "" });
  });

  app.get("/clients", (req, res) => {
    request.get(config.IdentityRoute + "/api/clients", (err, result) => {
      res.render("clients.ejs", { clients: JSON.parse(result.body) });
    });
  });

  app.get("/AddAClient", (req, res) => {
    res.render("AddAClient.ejs", { message: "" });
  });

  app.post("/AddAClient", (req, res) => {
    request.post(
      {
        url: config.IdentityRoute + "/api/clients",
        body: req.body,
        json: true
      },
      (err, result) => {
        res.redirect("/clients");
      }
    );
  });

  //#endregion

  app.get("/assignments", (req, res) => {
    request.get(config.IdentityRoute + "/api/users", (err, result) => {
      var all_users = JSON.parse(result.body);
      //console.log(all_users);
      request.get(config.IdentityRoute + "/api/clients", (err, result) => {
        res.render("assignments.ejs", {
          message: "",
          users: all_users,
          clients: JSON.parse(result.body)
        });
      });
    });
  });

  app.get("/assignments/:id", (req, res) => {
    request.get(
      config.IdentityRoute + "/api/users/" + req.params.id,
      (err, result) => {
        var user = [JSON.parse(result.body)];
        //console.log(user);
        request.get(config.IdentityRoute + "/api/clients", (err, result) => {
          res.render("assignments.ejs", {
            message: "",
            users: user,
            clients: JSON.parse(result.body)
          });
        });
      }
    );
  });

  app.get("/classignments/:id", (req, res) => {
    request.get(
      config.IdentityRoute + "/api/clients/" + req.params.id,
      (err, result) => {
        var client = [JSON.parse(result.body)];
        //console.log(user);
        request.get(config.IdentityRoute + "/api/users", (err, result) => {
          res.render("assignments.ejs", {
            message: "",
            users: JSON.parse(result.body),
            clients: client
          });
        });
      }
    );
  });

  app.post("/assignments", (req, res) => {
    //req.body.scopes = { role: req.body.role, action: req.body.action, team: req.body.team };

    let accId;
    let userFound;
    let userMail;
    let clientName;
    let roleOnTheClient;
    request.get(
      //user za mail
      {
        url: config.IdentityRoute + "/api/users/" + req.body.user,
        json: true,
        headers: { authorization: "bearer " + config.token }
      },
      (err, result) => {
        userFound = result.body.name;
        userMail = result.body.email;
      }
    );

    request.get(
      {
        //client za mail
        url: config.IdentityRoute + "/api/clients/" + req.body.client,
        json: true,
        headers: { authorization: "bearer " + config.token }
      },
      (err, result) => {
        clientName = result.body.name;
        //roleOnTheClient=result.body.scopes[0].role
      }
    );
    req.body.scopes = { role: req.body.scopes, action: "", team: "" };
    request.post(
      {
        url: config.IdentityRoute + "/api/access",
        headers: { authorization: "bearer " + config.token },
        body: req.body,
        json: true
      },
      (err, result) => {
        accId = result.body._id;
        roleOnTheClient = req.body.role;
        console.log("asdasd", roleOnTheClient);
        request.put(
          {
            url: config.IdentityRoute + "/api/users/" + req.body.user,
            headers: { authorization: "bearer " + config.token },
            body: { clients: accId },
            json: true
          },
          (err, result) => {}
        );

        request.put(
          {
            url: config.IdentityRoute + "/api/clients/" + req.body.client,
            headers: { authorization: "bearer " + config.token },
            body: { users: accId },
            json: true
          },
          (err, result) => {
            sendMail(
              userMail,
              `Your account is activated, ${userFound}!`,
              `Your account was granted access to ${clientName}, and your role is ${roleOnTheClient}`
            );
            res.redirect("/adminPanel");
          }
        );
      }
    );
  });

  app.get("/adminPanel", (req, res) => {
    if (_.isEmpty(config.currentUser)) res.redirect("/login");
    else {
      res.render("adminPanel.ejs", {
        message: "",
        info: { currentUser: config.currentUser } //dalje igranje sa logovanjem, clientId problem, itd.
      });
   }
  });

  app.get("/adminEnableUser/:id", (req, res) => {
    var id = req.params.id;
    let enb = true;
    request.get(config.IdentityRoute + "/api/users/" + id, (err, result) => {
      let user = JSON.parse(result.body);

      if (user.enabled === true) enb = false;
      request.put(
        {
          url: config.IdentityRoute + "/api/users/" + id,
          headers: { authorization: "bearer " + config.token },
          body: { enabled: enb },
          json: true
        },
        (err, result) => {
          res.redirect("/adminUserView");
        }
      );
    });
  });

  app.get("/userSelfEdit/:id", (req, res) => {
    request.get(
      config.IdentityRoute + "/api/users/" + config.currentUser._id,
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
        url: config.IdentityRoute + "/api/users/" + config.currentUser._id,
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

    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.plainText === ""
    ) {
      res.render("signup.ejs", {
        message: "Please fill out all fields",
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
        message: "Email not valid",
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
          url: config.IdentityRoute + "/api/users",
          body: req.body,
          json: true
        },
        (err, result) => {
          if (result.body.errmsg) {
            res.render("signup.ejs", { message: "Error!" });
          } else res.redirect("/adminUserView");
        }
      );
    }
  });

  app.get("/adminEnableClient/:id", (req, res) => {
    var id = req.params.id;
    let enb = true;
    request.get(config.IdentityRoute + "/api/clients/" + id, (err, result) => {
      let user = JSON.parse(result.body);

      if (user.enabled === true) enb = false;
      request.put(
        {
          url: config.IdentityRoute + "/api/clients/" + id,
          headers: { authorization: "bearer " + config.token },
          body: { enabled: enb },
          json: true
        },
        (err, result) => {
          res.redirect("/clients");
        }
      );
    });
  });

  app.get("/usersClients/:id", (req, res) => {
    //let user;
    // request.get(//user za mail
    //     {
    //         url: config.IdentityRoute + "/api/users/" + req.params.id,
    //         json: true,
    //         headers: { authorization: "bearer " + config.token }
    //     },
    //     (err, result) => {
    //         user = JSON.parse(result.body);
    //     }
    // )
    // console.log(user._id)
    // request.get(
    //     config.IdentityRoute + "/api/users/" + req.params.id,
    //     (err, result) => {
    //
    //     }
    // );

    request.get(
      config.IdentityRoute + "/api/users/" + req.params.id + "/clients",
      (err, result) => {
        let sendResult = JSON.parse(result.body);
        res.render("usersClients.ejs", {
          props: sendResult.clients,
          user: req.params.id
        });
      }
    );
  });

  app.get("/clientsUsers/:id", (req, res) => {
    request.get(
      config.IdentityRoute + "/api/clients/" + req.params.id + "/users",
      (err, result) => {
        let sendResult = JSON.parse(result.body);

        res.render("clientsUsers.ejs", { props: sendResult.users });
      }
    );
  });
};
