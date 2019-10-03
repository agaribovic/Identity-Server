const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

let userId

describe("#users", function() {
  describe("/GET users", function() {
    this.timeout(5000);
    it("should list all users", async function() {
      const result = await chai.request(app).get("/api/users");
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/POST users", function() {
    this.timeout(5000);
    it("it should create a user", async function() {
      let user = {
        //_id: "5ca1bfd988dbdd58ede1e7e0", //USERID
        name: "Korisnik",
        email: "korisnik@example.com",
        plainText: "Korisnik69!",
        enabled: true
      };

      const result = await chai
        .request(app)
        .post("/api/users")
        .send(user);

      userId = result.body._id
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/GET/:id user", function() {
    this.timeout(5000);
    it("should return one user", async function() {
      const result = await chai
        .request(app)
        .get(`/api/users/${userId}`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id user", () => {
    this.timeout(5000);
    it("it should update a user based on the given id", async () => {
      let user = {
        name: "korisnikSistema",
        email: "korysnik16@msn.com"
      };

      const result = await chai
        .request(app)
        .put(`/api/users/${userId}`)
        .send(user);
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/DELETE/:id user", () => {
    this.timeout(5000);
    it("it should delete a user based on the given id", async () => {
      const result = await chai
        .request(app)
        .delete(`/api/users/${userId}`)
        result.should.have.status(200);
    });
  });
});
