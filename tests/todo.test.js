const request = require("supertest");
const app = require("../src/app");

describe("Todo API", () => {
  describe("POST /api/v1/todos", () => {
    it("should create a todo", async () => {
      const response = await request(app).post("/api/v1/todos").send({
        title: "Learn GitHub Actions",
      });

      expect(response.statusCode).toBe(201);

      expect(response.body.success).toBe(true);

      expect(response.body.data.title).toBe("Learn GitHub Actions");
    });

    it("should reject empty title", async () => {
      const response = await request(app).post("/api/v1/todos").send({});

      expect(response.statusCode).toBe(400);
    });
  });
});
