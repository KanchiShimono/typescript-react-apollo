import { ApolloServer } from 'apollo-server';
import { createConnection, getRepository } from 'typeorm';
import Book from './entity/Book';
import { typeDefs } from './graphql/generated/resolver-types';
import resolvers from './graphql/resolver';

async function main() {
  createConnection();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      repo: getRepository(Book),
    }),
  });

  // The `listen` method launches a web server.
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
    .catch((ex) => {
      console.error(ex.stacks);
      process.exit(1);
    });
}

main();
