import React, { useState } from 'react'

const StringState = () => {
	const [title, setTitle] = useState('');

	const handleChange = (e) => {
		setTitle(e.target.value );
	}

	return (
		<div>
			<h3>Your name: {title}</h3>
			<input type="text" value={title} onChange={handleChange} placeholder='Enter your name'/>
		</div>
	)
}

export default StringState