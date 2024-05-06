"use client";

import { useState } from "react";
import List from "./components/List";
import { books } from "@/utils";
import Cart from "./components/Cart";

/*
 Neste cenário queremos resolver o repasse de props entre os nós filhos 
*/

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleOnSelected = (id: string) => {
    setSelectedItems((prev) => [...prev, id]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div className="fixed right-4 bottom-4 text-2xl text-neutral-700">
        <Cart selectedItems={selectedItems} />
      </div>
      <List
        books={books}
        selectedItems={selectedItems}
        handleOnSelected={handleOnSelected}
      />
    </main>
  );
}
