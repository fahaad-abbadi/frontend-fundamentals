import React from "react";
import SubmittedForm from "./SubmittedForm";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profilePicture: null,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        SubmittedForm({...formData, [name]: value});
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({...formData, profilePicture: file});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
        setSubmitted(true);
    }

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            profilePicture: null
        });

        setSubmitted(false);
    }

    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input
                    type="text"
                    name="name"
                    value={FormData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="">Email: </label>
                    <input
                    type="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="">Profile Picture: </label>
                    <input type="text" accept="image/" onChange={handleFileChange}/>
                </div>

                <button type = "submit">Register</button>
            </form>
        </div>
  );
};

export default Form;
