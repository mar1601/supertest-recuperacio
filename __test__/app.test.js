import supertest from "supertest";
import app from "../app.js"

const request = supertest(app);

describe("Test example", () => {

    test("GET /", async () => {
        const response = await request
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.data.length).toEqual(1);
        expect(response.body.data[0].email).toEqual("test@example.com");

    })

    test("POST /", async () => {
        const response = await request
            .post("/send")
            .expect("Content-Type", /json/)
            .expect(201)
            .send({
                id: 1,
                email: "francisco@example.com"
            });

        expect(response.body.data.length).toEqual(2);
        expect(response.body.data[0].email).toEqual("test@example.com");
        expect(response.body.data[1].email).toEqual("francisco@example.com");

    })

    test("PUT /", async () => {
        const response = await request
            .put("/update/1")
            .send({
                email: "mendes@example.com"
            })
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.data.length).toEqual(2);
        expect(response.body.data[0].email).toEqual("test@example.com");
        expect(response.body.data[1].email).toEqual("mendes@example.com");

    })

    test("DELETE /destroy/:id", async () => {
        const response = await request
            .delete("/destroy/1")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body.data.length).toEqual(1);
        expect(response.body.data[0].email).toEqual("test@example.com");

    });

});







