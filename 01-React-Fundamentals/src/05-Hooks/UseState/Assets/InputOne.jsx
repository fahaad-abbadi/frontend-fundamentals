import React from "react";

export const Input = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e) => {
    setItems(e.target.value);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <input
            type="text"
            placeholder="Enter text"
            value={item}
            onChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
};
