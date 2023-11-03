export default function Item({ item, onHandleDelete, onToggleCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onClick={() => onToggleCheck(item.id)}
      ></input>
      <span style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onHandleDelete(item.id)}>X</button>
    </li>
  );
}
