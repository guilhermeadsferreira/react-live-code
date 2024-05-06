"use client";

import { useState } from "react";
import { books } from "../../utils";
import Book from "./components/Book";

/*
 Neste cenário temos uma listagem aonde selecionamos um item e todos os outros itens são renderizados novamente
*/

export default function Home() {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  const handleOnSelected = (id: string) => {
    setSelectedBooks((prev) => [...prev, id]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 border-2">
      <div className="flex flex-col gap-6 border-2">
        {books.map((book) => (
          <Book
            book={book}
            selected={selectedBooks.some((i) => i === String(book.id))}
            onSelected={handleOnSelected}
          />
        ))}
      </div>
    </main>
  );
}
