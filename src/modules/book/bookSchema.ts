
export const bookSchema = `#graphql
  enum BookCategory {
    ROMANCE
    DRAMA
    FICTION
    HORROR
  }

  type Book {
    id: ID!
    title: String!
    category: BookCategory!
    releaseDate: Date!
    author: Author!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, category: BookCategory!, releaseDate: Date!, author: String!): Book
  }
`