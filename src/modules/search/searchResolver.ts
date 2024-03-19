import { Author, Book, BookCategory, authors, books, createBook, findOrCreateAuthor } from "../../database/memoryDB";

export const searchResolver = {
  SearchResult: {
    __resolveType(obj: Book | Author){
      if('name' in obj){
        return 'Author';
      }
      if('title' in obj){
        return 'Book';
      }
      return null;
    },
  },
  Query: {
    search: (_, args: { contains: string }) => {
      const contains = args.contains.toLocaleUpperCase();

      const foundedAuthors = authors.filter((author) => {
        return author.name.toLocaleUpperCase().includes(contains)
      });
      
      const foundedBooks = books.filter((book) => {
        return book.title.toUpperCase().includes(contains) || book.category.toUpperCase().includes(contains)
      });

      return [
        ...foundedAuthors,
        ...foundedBooks,
      ];
    },
  },
};