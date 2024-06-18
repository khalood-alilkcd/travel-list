import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "../index.css";
import { useState } from "react";

// const intailItem = [
//   { id: 1, description: "Passports", quality: 2, packed: false },
//   { id: 2, description: "Socks", quality: 12, packed: false },
//   { id: 3, description: "Charger", quality: 8, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function HandleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function HandleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function HandleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function HandleDeleteItems() {
    const confirm = window.confirm("are you sure you want to delete all items");
    if (confirm) setItems([]);
  }
  return (
    <div>
      <Logo />
      <Form onHandleAddItems={HandleAddItem} />
      <PackingList
        addItems={items}
        onDeleteItems={HandleDeleteItem}
        onHandleToggle={HandleToggleItems}
        onHandleDeleteItems={HandleDeleteItems}
      />
      <Stats items={items} />
    </div>
  );
}
