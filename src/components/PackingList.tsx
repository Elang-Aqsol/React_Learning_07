// import React, { useState } from "react";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingListProps {
  items: Item[];
  removeItem: (id: number) => void;
}

export function PackingList({ items, removeItem }: PackingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

interface ItemProps {
  item: Item;
  removeItem: (id: number) => void;
}

function Item({ item, removeItem }: ItemProps) {
  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemoveItem}>❌</button>
    </li>
  );
}
