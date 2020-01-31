const request = require("supertest");

const jokes = require("./jokes-router.js");

describe("GET /", function() {
  it("should return 200 OK", function() {
    return request(jokes)
      .get("/")
      .then(res => {
        console.log(res);
        expect(res.status).toBe(700);
      });
  });

  it("should return JSON", async function() {
    return request(jokes)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/html/i);
      });
  });

  it("should return JSON", function() {
    request(jokes)
      .get("/")
      .then(res => {
        expect(res.body.api).toBe("foggybottomboys");
      });
  });
});
