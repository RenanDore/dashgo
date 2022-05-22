import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    /* Quais dados eu quero armazenar dentro do meu banco de dados que o Miraje cria. Quero armazenar uma listagem de usuarios, seria como se fosse uma tabela do banco */
    /* Partial é usado para falar que ele não precisa esperar todos os campos obrigatóriamente */
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    /* É tipo uma fábrica onde cria vários registros */
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          /* Crie os usuarios com data de até 10 dias na data de hoje */
          return faker.date.recent(10);
        },
      }),
    },

    /* Gerar dados fictícios no miraje a fim de testar */
    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api"; /* /api/users para chamar as rotas */
      this.timing = 750; /* Todas as chamadas vão demorar 750 milisegundos para acontecer */
      /* O miraje vai criar a estrutura necessaria para buscar, criar e atualizar */
      this.get("/users");
      this.post("/users");

      /* Quando terminar de determinar as rotas ele volta pro estado incial */
      this.namespace = "";
      this.passthrough(); /* Se tiver alguma funcao a API routes fora do miraje ele passa direto */
    },
  });

  return server;
}