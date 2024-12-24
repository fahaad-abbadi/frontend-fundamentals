import React, { useState } from 'react';


let data = [1, 5, 6, 9]

const ArrayPractice = ({ data }) => {
    const [arrayElements, setArrayElements] = useState([data]);
    
	const addItem = (data) => {
		setArrayElements([data]);
	}

    console.log(arrayElements)

    return (
        <div>
            <button onClick={addItem}>Test</button>

            <ul>
                {
                    arrayElements.map((arrayElement, index) => (
                        <li key={index}>{arrayElement + 10}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ArrayPractice;