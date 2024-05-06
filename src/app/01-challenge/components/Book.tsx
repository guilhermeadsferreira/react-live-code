const Book = ({ book, selected, onSelected }: BookProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-40 w-80 border-2 ${
        selected && "border-blue-700"
      }`}
      onClick={() => onSelected(String(book.id))}
    >
      <h1>{book.name}</h1>
      <h1>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(book.price)}
      </h1>
    </div>
  );
};

export default Book;
