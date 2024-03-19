import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { scalarResolver } from './graphql/scalars/resolver';
import { authorResolver } from './modules/author/authorResolver';
import { searchResolver } from './modules/search/searchResolver';
import { bookResolver } from './modules/book/bookResolver';
import { scalarSchema } from './graphql/scalars/scalarSchema';
import { authorSchema } from './modules/author/authorSchema';
import { bookSchema } from './modules/book/bookSchema';
import { searchSchema } from './modules/search/searchSchema';

const server = new ApolloServer({
  typeDefs: [
    scalarSchema,
    bookSchema,
    authorSchema,
    searchSchema,
  ],
  resolvers: [
    scalarResolver,
    bookResolver,
    authorResolver,
    searchResolver,
  ],
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
})
