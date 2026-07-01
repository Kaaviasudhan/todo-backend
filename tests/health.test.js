const request = require("supertest");
const app = require("../src/app");

describe("Health API", () => {
  it("should return API running message", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

    expect(response.body.message).toBe("Todo Backend API is running 🚀");
  });
});
