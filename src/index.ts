import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { scalarResolver } from './graphql/scalars/resolver';
import { scalarSchema } from './graphql/scalars/scalarSchema';
import { authorResolver } from './modules/author/authorResolver';
import { authorSchema } from './modules/author/authorSchema';
import { bookResolver } from './modules/book/bookResolver';
import { bookSchema } from './modules/book/bookSchema';
import { searchResolver } from './modules/search/searchResolver';
import { searchSchema } from './modules/search/searchSchema';

const server = new ApolloServer({
  typeDefs: [scalarSchema, bookSchema, authorSchema, searchSchema],
  resolvers: [scalarResolver, bookResolver, authorResolver, searchResolver],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
