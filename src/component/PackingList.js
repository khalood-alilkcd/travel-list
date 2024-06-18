import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  addItems,
  onDeleteItems,
  onHandleToggle,
  onHandleDeleteItems,
}) {
  const [sortBy, setSortBy] = useState("description");
  let sortItems;
  if (sortBy === "input") sortItems = addItems;
  if (sortBy === "description")
    sortItems = addItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = addItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            addItem={item}
            onHandleToggle={onHandleToggle}
            key={item.id}
            onDeleteItems={onDeleteItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onHandleDeleteItems}>Clear all</button>
      </div>
    </div>
  );
}
