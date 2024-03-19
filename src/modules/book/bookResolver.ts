import { Book, BookCategory, authors, books, createBook, findOrCreateAuthor } from "../../database/memoryDB";

export const bookResolver = {
  Query: {
    books: () => books,
  },
  Book: {
    author: (parent: Book) => {
      return authors.find((author)=> author.id === parent.idAuthor)
    }
  },
  Mutation: {
    addBook: (_, args: { title: string; category: BookCategory; releaseDate: Date; author: string }) => {
      const { author: authorName, ...book } = args;

      const author = findOrCreateAuthor(authorName);
      
      const newBook = createBook({
        title: book.title,
        category: book.category,
        releaseDate: book.releaseDate,
        idAuthor: author.id,
      });

      return newBook;
    }
  },
};