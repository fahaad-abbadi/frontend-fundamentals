import React, { useState } from 'react'
import data from './Data';

const Basic = () => {
    const [items, setItems] = useState(data);

    console.log(data)
    return (
        <div>
            <h3>Fruits</h3>

            <ul>
                {
                    items.map((item) => (
                        <li key = {item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Basic;