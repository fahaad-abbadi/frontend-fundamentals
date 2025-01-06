import React, {useState} from 'react'
import Team from './Team';
import Management from './Management';

const Portal = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');

    const logInPortal = (flag) => {
        setIsLoggedIn(flag);
    }

    const selectRole = (updatedRole) => {
        setRole(updatedRole)
    }

    return (
        <div>
            <h3>Welcome to cricket portal, please select your relevant field</h3>

            <p>
                {
                    isLoggedIn ? (
                        <div>
                            <p>Please select your relevant field</p>

                            <button onClick={() => selectRole('team')}>Team</button>
                            <button onClick={() => selectRole('management')}>Management</button>

                            <div>                                
                                {role == 'management' ? <Management/> : <></>}
                            </div>

                            <div>                                
                                {role == 'team' ? <Team/> : <></>}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3>Please Log In by selecting the below button</h3>

                            <button onClick={() => logInPortal(true)}>Log In</button>
                        </div>
                    )
                }
            </p>
        </div>
    )
}

export default Portal