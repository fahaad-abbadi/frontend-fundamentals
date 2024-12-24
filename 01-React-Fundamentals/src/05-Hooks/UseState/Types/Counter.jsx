import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
        </div>
    )
}

export default Counter