import React, { useState } from 'react'

const PracticeConditionalRendering = () => {
    const [isChanged, setIsChanged] = useState(false);

    const changeStatement = () => setIsChanged(true)
    const resetStatement = () => setIsChanged(false)

    return (
        <div>
            <h3>{isChanged ? 'Changed Statement' : 'This is the current statement'}</h3>

            {isChanged ? 
                <button onClick={resetStatement}>reset</button>
                :
                <button onClick={changeStatement}>change</button>
            }            
        </div>
    )
}

export default PracticeConditionalRendering