import React from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const itemsLength = items.length;
  const itemsPacked = items.reduce(
    (acc, curr) => (acc + curr.checked ? 1 : 0),
    0
  );

  const handleDelete = (id) =>
    setItems((items) => items.filter((item) => item.id !== id));

  const handleAddiction = (item) => setItems((items) => [...items, item]);

  const toggleCheck = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddiction={handleAddiction} />
      <PackingList
        items={items}
        onHandleDelete={handleDelete}
        onToggleCheck={toggleCheck}
      />
      <Stats itemsLength={itemsLength} itemsPacked={itemsPacked} />
    </div>
  );
}
