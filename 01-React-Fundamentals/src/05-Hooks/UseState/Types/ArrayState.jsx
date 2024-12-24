import React, { useState } from 'react'

const ArrayState = () => {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([...items, `Item ${items.length + 1}`]);
	}

	return (
		<div>
			<button onClick={addItem}>Add Item</button>

			<ul>
				{
					items.map((item, index) => (
						<li key = {index}>{item}</li> //render each item
					))
				}
			</ul>
		</div>
	)
}

export default ArrayState