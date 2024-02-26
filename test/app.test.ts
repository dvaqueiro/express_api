import request from "supertest";
import app from "../src/app";

describe("GET /hello", () => {
    it("should return hello world mensaje in json format", async () => {
        return request(app)
            .get("/hello")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe("Hello World");
            })
    });
});
