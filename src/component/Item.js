export default function Item({ addItem, onDeleteItems, onHandleToggle }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={addItem.packed}
          onChange={() => onHandleToggle(addItem.id)}
        />
      </span>
      <span style={addItem.packed ? { textDecoration: "line-through" } : {}}>
        {addItem.quantity} {addItem.description}
      </span>
      <button onClick={() => onDeleteItems(addItem.id)}>❌</button>
    </li>
  );
}
