import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onHandleDelete,
  onToggleCheck,
  onHandleDeleteList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  return (
    <div className="list">
      {sortedItems.length > 0 && (
        <ul>
          {sortedItems?.map((item) => (
            <Item
              item={item}
              key={item.id}
              onHandleDelete={onHandleDelete}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </ul>
      )}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input stats</option>
          <option value="description">Sort by description status</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onHandleDeleteList}>Clear list</button>
      </div>
    </div>
  );
}
