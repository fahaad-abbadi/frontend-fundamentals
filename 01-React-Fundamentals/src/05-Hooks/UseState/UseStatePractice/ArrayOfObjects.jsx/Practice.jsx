import React from 'react'
import data from './Data';

const Practice = () => {
    const [items, setItems] = useState(data);
    const [newItem, setNewItem] = useState('')

    const addItem = (e) => {
        if(newItem.trim() === '')
            return;

        //creating a new object
        const newObjItem = {id: items.length + 1, name: newItem}
        
        setItems([...items, newItemObj]);
        setNewItems('')
    }

    return (
        <div>
            <h3>Fruits</h3>

            <ul>
                {
                    items.map((item) => (
                        <li key={item.key}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Practice