import React, { useState } from 'react'
import data from './Data'

export const Advanced = () => {
    const [items, setItems] = useState(data);

    const deleteItem = (id) => {
        const filteredItems = items.filter(item => item.id !== id);
        setItems(filteredItems)
    }

    const resetList = () => {
        setItems([]);
    }

    return (
        <div>
            <h3>Manage Fruits</h3>

            <ul>
                {items.map((item) => (
                        <li key = {item.id}>
                            {item.name}
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                ))}
            </ul>

            <button onClick={resetList}>Reset List</button>
        </div>
    )
}   
