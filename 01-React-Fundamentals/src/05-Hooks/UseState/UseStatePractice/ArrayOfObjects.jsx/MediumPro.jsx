import React, { useState } from "react";
import data from "./Data";

const MediumPro = () => {
  const [items, setItems] = useState(data);

  const updateItem = (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );

    setItems(updatedItems);
  };


  const updatedItemPractice = (id, newName) => {
	const updatedItemsPractice = items.map((item) => 
	item.id === id ? {...item, name: newName} : item
);
  }

  return (
    <div>
      <h1>Editable Fruit</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItem(item.id, e.target.value)}
            />

			{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumPro;
