import React from 'react'
import DataTable from './Basic/DataTable'
import Practice from './Practice/Practice';

const Table = () => {
    // the below data, is basically array of objects
    const userData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
        { id: 3, name: 'Sammy Johnston', email: 'sam@example.com', role: 'Viewer' },
    ];

    return (
        <div>
            <h3>User Management</h3>

            {/* <DataTable data = {userData}/> */}
            <Practice data = {userData}/>
        </div>
    )
}

export default Table