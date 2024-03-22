export const searchSchema = `#graphql
  union SearchResult = Book | Author

  type Query {
    search(contains: String!): [SearchResult!]!
  }
`;
