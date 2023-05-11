const request = require("supertest");
const app = require("./app");
const ChirpModel = require("./models/ChirpModel");
const formatChirps = require("./formatChirps");

describe("App", () => {
  test("GET /chirps should respond with a list of all chirps", async () => {
    const chirps = await ChirpModel.find({});
    const normalChirps = chirps.map(formatChirps);

    const expected = JSON.parse(JSON.stringify(normalChirps));
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
    const normalChirps = formatChirps(chirp);

    const expected = JSON.parse(JSON.stringify(normalChirps));
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
});
