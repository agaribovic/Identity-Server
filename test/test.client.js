const chai = require("chai");
chai.use(require("chai-http"));
chai.should();
import app from "../src/index";

describe("#clients", function () {
  describe("/GET clients", function () {
    this.timeout(5000);
    it("should list all clients", async function () {
      const result = await chai.request(app).get("/api/clients");
      result.should.have.status(200);
      //console.log(result.body)
    });
  });

  describe("/POST clients", function () {
    this.timeout(5000);
    it("it should create a client", async function () {
      let client = {
        _id: "5c9ce5d634ebf14458546abc",
        name: "Klijent29",
        secret: "123456!",
        enabled: true
      };

      const result = await chai
        .request(app)
        .post("/api/clients")
        .send(client);

      result.should.have.status(200);
      //console.log(result.body)
    });

    describe("/GET/:id client", function () {
      this.timeout(5000);
      it("should return one client", async function () {
        const result = await chai
          .request(app)
          .get(`/api/clients/5c9ce5d634ebf14458546abc`);
        result.should.have.status(200);
      });
    });

    describe("/PUT/:id client", () => {
      this.timeout(5000);
      it("it should update a client based on the given id", async () => {
        let client = {
          name: "klijent1337",
          secret: "abrakadabra"
        };

        const result = await chai
          .request(app)
          .put(`/api/clients/5c9ce5d634ebf14458546abc`)
          .send(client);
        result.should.have.status(200);
        //console.log(result.body)
      });
    });

    describe("/DELETE/:id client", () => {
      this.timeout(5000);
      it("it should delete a client based on the given id", async () => {
        chai
          .request(app)
          .delete(`/api/clients/5c9ce5d634ebf14458546abc`)
          .end((err, res) => {
            res.should.have.status(200);
            //console.log(res.body)
          });
      });
    });
  })
})
