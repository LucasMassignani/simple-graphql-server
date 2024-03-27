import { GraphQLError } from 'graphql';

import { Resolvers } from '../../__types__/resolvers-types';
import {
  authors,
  BookCategory,
  books,
  createBook,
  findOrCreateAuthor,
} from '../../database/memoryDB';

export const bookResolver: Resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    author: (parent) => {
      const author = authors.find((author) => author.id === parent.idAuthor);

      if (!author) {
        throw new GraphQLError('Author not found');
      }

      return author;
    },
  },
  Mutation: {
    addBook: (
      _: unknown,
      args: {
        title: string;
        category: BookCategory;
        releaseDate: Date;
        author: string;
      },
    ) => {
      const { author: authorName, ...book } = args;

      const author = findOrCreateAuthor(authorName);

      const newBook = createBook({
        title: book.title,
        category: book.category,
        releaseDate: book.releaseDate,
        idAuthor: author.id,
      });

      return newBook;
    },
  },
};
