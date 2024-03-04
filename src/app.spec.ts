import request from "supertest";
import { app } from "~/app";

describe("Test app", () => {
  test("sample data", async () => {
    const res = await request(app).post("/upload");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("uniqueHouseCount", 3);
  });
});
