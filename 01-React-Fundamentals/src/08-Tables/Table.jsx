import React from 'react'
import DataTable from './Basic/DataTable'
import Practice from './Practice/Practice';
import SecondPractice from './Practice/SecondPractice';
import ThirdPractice from './Practice/ThirdPractice';
import FourthPractice from './Practice/FourthPractice';

const Table = () => {
    // the below data, is basically array of objects
    const userData = [
        { id: 1, name: 'Bob Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Mark Smith', email: 'jane@example.com', role: 'Editor' },
        { id: 3, name: 'Sammy Johnston', email: 'sam@example.com', role: 'Viewer' },
    ];

    return (
        <div>
            <h3>User Management</h3>

            {/* <DataTable data = {userData}/> */}
            {/* <Practice data = {userData}/> */}
            {/* <SecondPractice data = {userData}/> */}
            {/* <ThirdPractice data = {userData}/> */}
            <FourthPractice data = {userData}/>
        </div>
    )
}

export default Table