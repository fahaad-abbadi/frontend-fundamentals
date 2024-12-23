import React, { useState } from "react";

const ObjectState = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, //dynamically update the field
    });
  };

  return (
    <div>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="username"
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <br />

	  <h3>Username: {formData.username}</h3>
	  <h3>Email: {formData.email}</h3>
    </div>
  );
};

export default ObjectState;
