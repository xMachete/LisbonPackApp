import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onHandleDelete, onToggleCheck }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onHandleDelete={onHandleDelete}
            onToggleCheck={onToggleCheck}
          />
        ))}
      </ul>
    </div>
  );
}
