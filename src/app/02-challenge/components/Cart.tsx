import React from "react";

type Props = {
  selectedItems: string[];
};

const Cart = ({ selectedItems }: Props) => {
  return <div>Itens selecionados: {selectedItems.length}</div>;
};

export default Cart;
