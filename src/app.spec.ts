import request from "supertest";
import { app } from "~/app";
import path from "path";

function makeTestFilePath(testFileName: string) {
  return path.resolve(__dirname, "..", "testfiles", testFileName);
}

describe("Test app", () => {
  test("Invalid data format file", async () => {
    const res = await request(app)
      .post("/upload")
      .attach("file", makeTestFilePath("invalid-format-data"));
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("uniqueHouseCount", 0);
  });

  test("Empty file request", async () => {
    const res = await request(app).post("/upload");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  test("sample data", async () => {
    const res = await request(app)
      .post("/upload")
      .attach("file", makeTestFilePath("sample.csv"));

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("uniqueHouseCount", 3);
  });

  test("all the same data", async () => {
    const res = await request(app)
      .post("/upload")
      .attach("file", makeTestFilePath("all-the-same.csv"));

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("uniqueHouseCount", 1);
  });
});
