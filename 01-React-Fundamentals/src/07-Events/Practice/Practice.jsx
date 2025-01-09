import React, { useState } from 'react'

const Practice = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value            
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //simple form validation
        if(!formData.email || !formData.password){
            setError('All fields are required');
            return;
        }

        setSubmitted(true);
        setError('');
    }

    const handleReset = () => {
        setFormData({
            email: '',
            password: '',
        });

        setSubmitted(false);
        setError('');
    }

    return (
        <div>Practice</div>
    )
}

export default Practice;