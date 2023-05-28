const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("./app");
const ChirpModel = require("./models/ChirpModel");
const mongoose = require("mongoose");

describe("App", () => {
  test("GET /chirps should respond with a list of all chirps", async () => {
    const chirps = await ChirpModel.find({});

    const expected = JSON.parse(JSON.stringify(chirps));
    const expectedStatusCode = 200;

    await request(app)
      .get("/chirps")
      .expect(expectedStatusCode)
      .expect((res) => {
        const body = res.body;
        expect(body).toEqual(expected);
      });
  });

  test("GET /chirps/:id should respond with a single chirp", async () => {
    const chirp = await ChirpModel.findById("61480db44ab0cf7175467757");

    const expected = JSON.parse(JSON.stringify(chirp));
    const expectedStatusCode = 200;

    await request(app)
      .get("/chirps/61480db44ab0cf7175467757")
      .expect(expectedStatusCode)
      .expect((res) => {
        const body = res.body;
        expect(body).toEqual(expected);
      });
  });

  test("GET /chirps/:id should respond with a 404 error with unknown ids", async () => {
    const expectedStatusCode = 404;

    await request(app)
      .get("/chirps/60480db44ab0cf7175467757")
      .expect(expectedStatusCode);
  });

  test("POST /chirps should create a new chirp", async () => {
    const body = {
      text: "Example text",
      createdDate: "2023-03-09T11:00:00.000Z",
      username: "Example",
      avatar: "example.png",
    };
    const expectedStatusCode = 200;

    const res = await request(app)
      .post("/chirps")
      .send(body)
      .expect(expectedStatusCode)
      .expect((res) => {
        expect(res.body.id).toBeDefined();
        expect(res.body).toEqual(expect.objectContaining(body));
        const isValidId = mongoose.Types.ObjectId.isValid(res.body.id);
        expect(isValidId).toEqual(true);
      });

    // Get the ID that we we're given back
    const id = res.body.id;

    // Use the specific chirp endpoint to find the created chirp
    await request(app)
      .get(`/chirps/${id}`)
      .expect(200)
      .expect((res) => {
        const expected = { id, ...body };
        expect(res.body).toEqual(expected);
      });
  });
});
