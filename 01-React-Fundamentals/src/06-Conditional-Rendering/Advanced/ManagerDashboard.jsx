import React from 'react'

const ManagerDashboard = ({ featureFlags }) => {
	return (
		<div>
			<h3>Manager Panel</h3>
			<p>Manage team performance and schedule</p>

			{featureFlags.analytics && <p>Access to analytics</p>}
		</div>
	)
}

export default ManagerDashboard