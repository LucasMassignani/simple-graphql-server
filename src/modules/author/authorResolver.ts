import { Author, books } from "../../database/memoryDB";

export const authorResolver = {
  Author: {
    books: (parent: Author) => {
      return books.filter((book) => {
        return book.idAuthor === parent.id;
      })
    }
  }
};