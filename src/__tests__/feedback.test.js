const app = require("../app");
const db = require("../database");
const request = require("supertest");

describe("test the controller feedback", () => {
  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  })

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

  it("Should be able to create a new feedback", async () => {
    const response = await request(app).post("/create/feedback").send({
        comment: "Muito bom mesmo!",
	    evaluation: "Aprovado",
	    email: "loren@gmail.com",
        nameOrientador: "Loren Alonso",
	    nameCoordenador: null,
	    nameAluno: "Gabriela Tamashiro"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("msg");
  });


  it("Should be able to list feedback", async () => {
    const response = await request(app).post("/read/feedbackOrientador").send({name:"Gabriela Tamashiro"});

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("alunoId");
  });

  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await db.sequelize.close()
  })
});