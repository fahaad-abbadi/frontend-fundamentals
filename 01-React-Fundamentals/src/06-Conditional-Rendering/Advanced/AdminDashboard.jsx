import React from 'react'

const AdminDashboard = ({ featureFlags }) => {


    return (
        <div>
            <h3>Admin Panel</h3>
            <p>Manage users, reports, and advanced settings</p>

            {featureFlags.analytics && <p>Access to advanced analytics</p>}
            {featureFlags.settings && <p>Access to site-wide settings</p>}

            {!featureFlags.analytics && !featureFlags.settings && (
                <p>No special features enabled</p>
            )}
        </div>
    )
}

export default AdminDashboard