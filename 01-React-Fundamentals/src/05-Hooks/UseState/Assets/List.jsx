import React from 'react'
import data from '../UseStatePractice/ArrayOfObjects.jsx/Data'

export const List = () => {
    const [items, setItems] = useState(data)

    return (
        <div>
            <ul>
                {items.map((item) => (
                        <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
