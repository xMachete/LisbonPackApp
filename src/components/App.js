import React from "react";
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
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
  const handleDeleteList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete whole list?"
    );
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddiction={handleAddiction} />
      <PackingList
        items={items}
        onHandleDelete={handleDelete}
        onToggleCheck={toggleCheck}
        onHandleDeleteList={handleDeleteList}
      />
      <Stats itemsLength={itemsLength} itemsPacked={itemsPacked} />
    </div>
  );
}
