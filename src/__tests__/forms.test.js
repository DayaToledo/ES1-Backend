const app = require("../app");
const db = require("../database");
const request = require("supertest");

describe("test the controller form", () => {
  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  })

  it("Should be able to create a new form", async () => {
    const response = await request(app).post("/create/form").send({
        name: "Gabriela Tamashiro",
        numberUsp: 11111111111,
        email: "gabi.tamashiro@gmail.com",
        nameOrientador: "Maria Eduarda",
        linkLattes: "google.com",
        dateLattes: "2021-03-25T12:56:02.000Z",
        curso: "Mestrado",
        question1: "sim",
        question2: "sim",
        question3: "não",
        question4: "não",
        question5: "talvez",
        question6: "não e sim",
        question7: "nunca",
        question8: "às vezes",
        question9: "nunca",
        question10: "sim",
        question11: "não",
        question12: "talvez",
        question13: "sempre",
        question14: "às vezes",
        question15: "vou pensar",
        question16: "sim",
        question17: "sempre",
        question18: "não",
        question19: "não",
        question20: "sim"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("msg");
  });


  it("Should be able to list form", async () => {
    const response = await request(app).post("/read/form").send({name:"Gabriela Tamashiro"});

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("aluno");
  });

  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await db.sequelize.close()
  })
});