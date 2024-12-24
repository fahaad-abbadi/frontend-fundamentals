import React, { useState } from 'react'
import data from './Data';

const MediumPro = () => {
	const [items, setItems] = useState(data);

	return (
		<div>
			<h1>Editable Fruit</h1>

			<ul>
				{
					items.map((item) => (
						<li key = {item.id}>
							<input type="text" value={item.name} onChange={(e) => updateItem(item.id, e.target.value)}/>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default MediumPro