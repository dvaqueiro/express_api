import request from "supertest";
import app from "../src/app";

const message = "Hello World!";

describe("GET /hello?message=Hello world!", () => {
    it("should return request message in json format", async () => {
        return request(app)
            .get(`/hello?message=${message}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe(message);
            })
    });
});
