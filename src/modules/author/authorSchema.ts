export const authorSchema = `#graphql
  type Author {
    name: String!
    books: [Book!]!
  }
`;
