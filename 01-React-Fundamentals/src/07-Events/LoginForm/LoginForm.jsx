import React, { useState} from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //simple form validation
        if(!formData.email || !formData.password){
            setError('All field are required');
            return;
        }

        //simulate API calls
        console.log('Submitting: ', formData);
        setSubmitted(true);
        setError('');
    };

    const handleReset = () => {
        setFormData({
            email: '',
            password: '',
        });

        setSubmitted(false);
        setError('');
    }

    return (
        <div>
            <h3>Login</h3>

            {submitted ? (
                <div>
                    <p>Login Successful</p>
                    <button onClick={handleReset}>Log in again</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} required/>
                    </div>

                    <div>
                        <label htmlFor="">Password: </label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange} required/>
                    </div>

                    {error && <p>{error}</p>}

                    <button type='submit'>Login</button>

                    <button type='button' onClick={handleReset}>Reset</button>
                </form>
            )}
        </div>
    )
}

export default LoginForm