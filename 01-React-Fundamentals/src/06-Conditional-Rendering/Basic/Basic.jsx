import React, { useState } from "react";

const Basic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  console.log(isLoggedIn)

  return (
    <div>
      <h3>{isLoggedIn ? "Welcome Back" : "Please Log In"}</h3>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Basic;
