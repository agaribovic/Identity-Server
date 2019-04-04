const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

describe("#access", function() {
  describe("/GET access", function() {
    this.timeout(5000);
    it("should list all accesses", async function() {
      const result = await chai.request(app).get("/api/access");
      result.should.have.status(200);
      console.log(result.body);
    });
  });

  describe("/POST access", function() {
    this.timeout(5000);
    it("it should create an access", async function() {
      let client = {
        _id: "5ca1d14c88dbdd58ede1f4f4", //clientID isti kao u client tests
        name: "Klijent29",
        secret: "123456!",
        enabled: true
      };

      await chai
        .request(app)
        .post("/api/clients")
        .send(client);

      let user = {
        _id: "5ca1d12788dbdd58ede1f4b6", //USERID ISTI KO KOD USERA
        name: "Korisnik",
        email: "korisnik2@example.com",
        plainText: "Korisnik69!",
        enabled: true
      };

      await chai
        .request(app)
        .post("/api/users")
        .send(user);

      let access = {
        _id: "5ca1c02788dbdd58ede1e7f7", //UNIQUE ACCESS ID
        client: "5ca1d14c88dbdd58ede1f4f4",
        user: "5ca1d12788dbdd58ede1f4b6",
        scopes: [
          {
            role: "admin",
            action: "RW",
            team: "Apollo"
          }
        ]
      };

      const result = await chai
        .request(app)
        .post("/api/access")
        .send(access);

      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/GET/:id access", function() {
    this.timeout(5000);
    it("should return one access", async function() {
      const result = await chai
        .request(app)
        .get(`/api/access/5ca1c02788dbdd58ede1e7f7`);
      result.should.have.status(200);
    });
  });

  describe("/PUT/:id access", () => {
    this.timeout(5000);
    it("it should update access based on the given id", async () => {
      let access = {
        name: "klijent1337",
        secret: "abrakadabra"
      };

      const result = await chai
        .request(app)
        .put(`/api/access/5ca1c02788dbdd58ede1e7f7`)
        .send(access);
      result.should.have.status(200);
      //console.log(result.body);
    });
  });

  
  describe("/DELETE/:id user", () => {
    this.timeout(5000);
    it("it should delete a user based on the given id", async () => {
      const result = await chai
        .request(app)
        .delete(`/api/users/5ca1d12788dbdd58ede1f4b6`)
        result.should.have.status(200);
    });
  });

  
  describe("/DELETE/:id client", () => {
    this.timeout(5000);
    it("it should delete a client based on the given id", async () => {
      const result = await chai
        .request(app)
        .delete(`/api/clients/5ca1d14c88dbdd58ede1f4f4`)
      result.should.have.status(200);
    });
  });
  
  // describe("/DELETE/:id access", () => {
  //   this.timeout(5000);
  //   it("it should delete access based on the given id", async () => {
  //     const result = await chai
  //       .request(app)
  //       .delete(`/api/access/5ca1c02788dbdd58ede1e7f7`);
  //     result.should.have.status(200);
  //   });
  // });
})

