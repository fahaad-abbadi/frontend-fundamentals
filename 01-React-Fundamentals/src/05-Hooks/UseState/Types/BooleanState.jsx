import React, { useState } from 'react'

const BooleanState = () => {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => {
		setIsOn(!isOn);
	}

	return (
		<div>
			<h1>{isOn ? 'On' : 'Off'}</h1>
			
			<button onClick={toggleSwitch}>
				{isOn ? 'Turn Off': 'Turn On'}
			</button>
		</div>
	)
}

export default BooleanState