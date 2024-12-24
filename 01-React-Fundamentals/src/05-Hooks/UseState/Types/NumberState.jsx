import React, { useState } from 'react'

const NumberState = () => {
	const [count, setCount] = useState(0);

	const increaseBy = (step) => {
		setCount(count + step);
	}

	const decreaseBy = (step) => {
		setCount(count - step);
	}
 
	return (
		<div>
			<h3>Count: {count}</h3>

			<button onClick={() => increaseBy(1)}>+1</button>
			<button onClick={() => increaseBy(5)}>+5</button>
			<button onClick={() => decreaseBy(1)}>-1</button>
		</div>
	)
}

export default NumberState;