import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['src/**/*.graphql'],
  generates: {
    './src/__types__/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        mappers: {
          Author: '../database/memoryDB#Author',
          Book: '../database/memoryDB#Book',
        },
        enumValues: {
          BookCategory: '../database/memoryDB#BookCategory',
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
