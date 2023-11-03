import { useState } from "react";

export default function Form({ onHandleAddiction }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubimt = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, id: Date.now(), checked: false };
    onHandleAddiction(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="add-form" onSubmit={handleSubimt}>
      <form>
        <h3>What do you need for your trip?</h3>
        <select
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
          value={quantity}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
          )
        </select>
        <input
          type="text"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
