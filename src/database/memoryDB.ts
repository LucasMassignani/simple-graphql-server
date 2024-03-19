import { randomUUID } from "node:crypto";

export enum BookCategory {
  ROMANCE = 'ROMANCE',
  DRAMA = 'DRAMA',
  FICTION = 'FICTION',
  HORROR = 'HORROR',
}

export interface Author {
  id: string;
  name: string;
}

export const authors: Author[] = [
  {
    id: randomUUID(),
    name: 'Kate Chopin',
  },
  {
    id: randomUUID(),
    name: 'Paul Auster',
  }
]

export interface Book {
  id: string;
  title: string;
  category: BookCategory;
  releaseDate: Date;
  idAuthor: string;
}

export const books: Book[] = [
  {
    id: randomUUID(),
    title: 'The Awakening',
    category: BookCategory.ROMANCE,
    releaseDate: new Date(),
    idAuthor: authors[0].id,
  },
  {
    id: randomUUID(),
    title: 'City of Glass',
    category: BookCategory.HORROR,
    releaseDate: new Date(),
    idAuthor: authors[1].id,
  },
  {
    id: randomUUID(),
    title: 'City of Batatas',
    category: BookCategory.FICTION,
    releaseDate: new Date(),
    idAuthor: authors[1].id,
  },
];


export const findOrCreateAuthor = (authorName: string) => {
  const foundedAuthor = authors.find(author => author.name === authorName);

  if(foundedAuthor) {
    return foundedAuthor;
  }

  const newAuthor: Author = {
    id: randomUUID(),
    name: authorName,
  }

  authors.push(newAuthor);

  return newAuthor
}

export const createBook = (book: Omit<Book, 'id'>) => {
  const newBook: Book = {
    id: randomUUID(),
    ...book,
  }

  books.push(newBook);

  return newBook;
}