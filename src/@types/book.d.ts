declare type Book = {
  id: number;
  name: string;
  price: number;
};

declare type BookProps = {
  book: Book;
  selected: boolean;
  onSelected: (id: string) => void;
};
