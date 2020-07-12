import { ApolloServer } from 'apollo-server';
import { createConnection, getRepository } from 'typeorm';
import Book from './entity/Book';
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
  typeDefs,
} from './generated/resolver-types';

const Query: QueryResolvers = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  books: async (_parent, _args, context, _info) => {
    const { repo } = context;
    const books = await repo.find();
    return books;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  book: async (_parent, args, context, _info) => {
    const { repo } = context;
    const books = await repo.find();
    const match = books.find((b: Book) => b.title === args.title);
    return match || null;
  },
};

const Mutation: MutationResolvers = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerBook: async (_parent, args, context, _info) => {
    const { title, author } = args;
    const { repo } = context;
    const inserted = await repo.insert({ title, author });
    if (!inserted) {
      return null;
    }
    return { title, author };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteBook: async (_parent, args, context, _info) => {
    const { title } = args;
    const { repo } = context;
    const books = await repo.find();
    const target = books.find((b: Book) => b.title === args.title);
    if (!target) {
      return null;
    }
    const deleted = await repo.delete({ title });
    if (!deleted) {
      return null;
    }
    return target;
  },
};

const resolvers: Resolvers = {
  Query,
  Mutation,
};

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
