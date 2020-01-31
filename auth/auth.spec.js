const request = require("supertest");

const auth = require("./auth-router.js");

describe("POST / auth/login", function() {
  it("responds with json", async function(done) {
    return request(auth)
      .post("/login")
      .send({ username: "john", password: "john" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
  it("Returns a success message", async function(done) {
    return request(auth)
      .post("/login")
      .send({ username: "john", password: "john" })
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("POST / auth/register", function() {
  it("responds with json", async function(done) {
    return request(auth)
      .post("/register")
      .send({ username: "john", password: "john" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
  it("Returns a success message", async function(done) {
    return request(auth)
      .post("/register")
      .send({ username: "john", password: "john" })
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
