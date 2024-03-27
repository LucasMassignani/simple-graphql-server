import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import { scalarResolver } from './graphql/scalars/resolver';
import { authorResolver } from './modules/author/authorResolver';
import { bookResolver } from './modules/book/bookResolver';
import { searchResolver } from './modules/search/searchResolver';

const server = new ApolloServer({
  typeDefs: [
    readFileSync('./src/graphql/scalars/scalarSchema.graphql', {
      encoding: 'utf-8',
    }),
    readFileSync('./src/modules/author/authorSchema.graphql', {
      encoding: 'utf-8',
    }),
    readFileSync('./src/modules/book/bookSchema.graphql', {
      encoding: 'utf-8',
    }),
    readFileSync('./src/modules/search/searchSchema.graphql', {
      encoding: 'utf-8',
    }),
  ],
  resolvers: [scalarResolver, bookResolver, authorResolver, searchResolver],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
