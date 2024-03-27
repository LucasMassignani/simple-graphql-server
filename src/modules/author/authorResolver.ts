import { Resolvers } from '../../__types__/resolvers-types';
import { books } from '../../database/memoryDB';

export const authorResolver: Resolvers = {
  Author: {
    books: (parent) => {
      return books.filter((book) => {
        return book.idAuthor === parent.id;
      });
    },
  },
};
