import Book from "./Book";

type ListProps = {
  books: Book[];
  selectedItems: string[];
  handleOnSelected: (id: string) => void;
};

const List = ({ books, selectedItems, handleOnSelected }: ListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {books.map((book) => (
        <Book
          book={book}
          selected={selectedItems.some((i) => i === String(book.id))}
          onSelected={handleOnSelected}
        />
      ))}
    </div>
  );
};

export default List;
