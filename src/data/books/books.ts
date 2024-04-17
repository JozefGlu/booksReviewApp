export type BookType = {
  src: string;
  width: number;
  height: number;
  date: Date;
  id: string;
  score: number;
  author: string;
  genre: string;
};

const ArrayOfBooks = [] as BookType[];
