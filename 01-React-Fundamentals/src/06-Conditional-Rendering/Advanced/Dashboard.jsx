import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import ManagerDashboard from './ManagerDashboard'
import UserDashboard from './UserDashboard'
import LoadingSpinner from './LoadingSpinner'

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [featureFlags, setFeatureFlags] = useState({
        analytics: false,
        settings: false
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleLogin = (userRole) => {
        setIsLoggedIn(true);
        setRole(userRole);

        setFeatureFlags({
            analytics: userRole !== 'user',
            settings: userRole == 'admin',
        });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole(null);
        setFeatureFlags({
            analytics: false,
            settings: false
        })
    };

    if(isLoading){
        return <LoadingSpinner/>
    }

    return (
        <div>
            <h3>Company Dashboard</h3>

            {!isLoggedIn ? (
                    <div>
                        <p>Select role to log in:</p>

                        <button onClick={() => handleLogin('admin')}>Login as Admin</button>
                        <button onClick={() => handleLogin('manager')}>Login as Manager</button>
                        <button onClick={() => handleLogin('user')}>Login as User</button>
                    </div>
                ) : (
                    <div>
                        {role == 'admin' && <AdminDashboard featureFlags = {featureFlags}/>}
                        {role == 'manager' && <ManagerDashboard featureFlags = {featureFlags}/>}
                        {role == 'user' && <UserDashboard/>}

                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
        </div>
    )
}

export default Dashboard;