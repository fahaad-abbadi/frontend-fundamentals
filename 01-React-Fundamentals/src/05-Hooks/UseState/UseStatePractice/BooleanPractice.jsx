import React, { useState } from 'react'

const BooleanPractice = () => {
    const [booleanValue, setBooleanValue] = useState(true);

    const handleChange = () => {
        setBooleanValue(!booleanValue)
    }
    
    console.log(booleanValue)
    return (
        <div>
            <h3>{booleanValue ? `On` : `Off`}</h3>
            <button onClick={handleChange}>Switch</button>
        </div>
    )
}

export default BooleanPractice;