import React, { useState } from 'react'

const StringPractice = () => {
    const [stringValue, setStringValue] = useState('');

    const handleChange = (e) => {
        setStringValue(e.target.value);
    }

    return (
        <div>
            <h3>{stringValue}</h3>

            <input type="text" onChange={handleChange} value={stringValue} placeholder='enter your text here'/>
        </div>
    )
}

export default StringPractice;