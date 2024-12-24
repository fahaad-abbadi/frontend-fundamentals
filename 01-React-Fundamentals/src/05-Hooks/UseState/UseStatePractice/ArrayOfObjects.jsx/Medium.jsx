import React, { useState } from 'react'
import data from './Data';

const Medium = () => {
    const [items, setItems] = useState(data);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if(newItem.trim() === '')
            return;

        const newItemObj = {id: items.length + 1, name: newItem};
        setItems([...items, newItemObj]);
        setNewItem('')      
    }

    return (
        <div>
            <h3>Fruits</h3>
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='Add a fruit'/>
            <button onClick={addItem}>Add</button>

            <ul>
                {items.map((item) => (
                        <li key={item.id}>{item.name}</li> //display updated list
                ))}
            </ul>
        </div>
    )
}

export default Medium