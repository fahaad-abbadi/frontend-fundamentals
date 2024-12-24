import React, { useState } from 'react'

const NumberPractice = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h3>{count}</h3>

            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default NumberPractice;