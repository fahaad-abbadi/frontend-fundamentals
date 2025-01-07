import React, { useState } from "react";
import FormSuccessFul from "./FormSuccessFul";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profilePicture: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <h3>User Registration</h3>

      {/* doing the conditional rendering stuff, or, component rendering or whatever */}
      {isSubmitted ? <SubmittedForm /> : <Form />}
    </div>
  );
};

export default UserForm;
