const request = require("supertest");
const db = require("../dbConfig.js");
const server = require("../api/server.js");

let token;
beforeAll(async done => {
    user = {
        username: "brendan",
        password: "123",
    }
    request(server)
        .post("/api/login/register")
        .send(user)
        .then((res) => {
            expect(res.text).toContain("username")
            done();
        })
        .send(token)
        ;
});




it("should return JSON", () => {
    return request(server)
        .get("/api/recipes")
        .then(res => {
            expect(res.type).toBe("application/json");
        });
});


it("making sure delete works", () => {
    return request(server)
        .delete(`/api/recipes/delete/1`)
        .then(res => {
            expect(res.status).toBe(204);
        });
});

it("should return status code 200", () => {
    return request(server)
        .get("/api/recipes")
        .then(response => {
            expect(response.statusCode).toBe(200);
        });
});

describe("post route working", () => {
    let post = { "recipe_name": "AVOCADO" };
    it("recipe", () => {
        return request(server)
            .post("/api/recipes/post", post)
            .then(res => {
                expect(res.status).toBe(201);
            });
    });
})

describe("make sure password is hashing", () => {
    user = {
        username: "brendan2",
        password: "12333",
    }
    request(server)
        .post("/api/login/register", user)
        .then((res) => {
            expect(res.text).toContain("12333").toBe(false)
        })
})

afterEach(async () => {
    await db("posts").truncate();
});