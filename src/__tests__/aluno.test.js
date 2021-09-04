const app = require("../app");
const db = require("../database");
const request = require("supertest");

describe("test the controller aluno", () => {
  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  })

  it("Should be able to create a new aluno", async () => {
    const response = await request(app).post("/create/aluno").send({
      name: "Dayana Toledo",
      numberUsp: 1569887553,
      email: "dayana.toledo@gmail.com",
      nameOrientador: "Bruna",
      linkLattes: "https://lattes.cnpq.br/",
      dateLattes: "2021-03-25T12:56:02.000Z",
      curso: "Mestrado"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to create a new aluno", async () => {
    const response = await request(app).post("/create/aluno").send({
      name: "Gabriela Tamashiro",
      numberUsp: 15987452365,
      email: "gabi.tamashiro@gmail.com",
      nameOrientador: "Bruna",
      linkLattes: "https://lattes.cnpq.br/",
      dateLattes: "2020-08-14T12:56:02.000Z",
      curso: "Doutorado"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to list all alunos", async () => {
    const response = await request(app).get("/read/aluno");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);
  });

  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await db.sequelize.close()
  })
});