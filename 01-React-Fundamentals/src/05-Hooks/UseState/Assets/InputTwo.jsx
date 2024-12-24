import React from "react";

export const Input = () => {
  const [items, setItems] = useState(data);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <input
            type="text"
            placeholder="Enter text"
            value={item}
            onChange={(e) => setItems(e.target.value)}
          />
        ))}
      </ul>
    </div>
  );
};
