import React, { useState } from 'react'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('user');

    const handleLogin = (userRole) => {
        setIsLoggedIn(true);
        setRole(userRole);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole('user');
    }

    return (
        <div>
            <h3>Conditional Rendering Example</h3>

            {
                !isLoggedIn ? (
                    <div>
                        <p>Please choose your role to log in: </p>
                        <button onClick={() => handleLogin('admin')}>Login as Admin</button>
                        <button onClick={() => handleLogin('user')}>Login as User</button>
                    </div>                    
                ) : (
                    <div>
                        {role == 'admin' ? <AdminDashboard/> : <UserDashboard/>}
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard