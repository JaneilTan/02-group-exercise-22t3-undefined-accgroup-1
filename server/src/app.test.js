const request = require("supertest");
const app = require("./app");
const chirps = require("./chirps.json");

describe("App", () => {
  test("Should get chirps", async () => {
    const expected = chirps;
    const expectedStatusCode = 200;

    await request(app)
      .get("/chirps")
      .expect(expectedStatusCode)
      .expect((res) => {
        const body = res.body;
        expect(body).toEqual(expected);
      });
  });
});
