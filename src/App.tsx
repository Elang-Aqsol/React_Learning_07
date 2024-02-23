import { useState } from "react";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "ToothBrush", quantity: 10, packed: false },
    { id: 4, description: "AK47", quantity: 50, packed: false },
  ]);

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Logo />
      <Form addItem={addItem} />
      <PackingList items={items} removeItem={removeItem} />
      <Stats />
    </div>
  );
}

export default App;
