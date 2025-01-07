import React from 'react'

const DataTable = ({ data }) => {
    return (
        <div>
            <table>

    {/* Create Table Header */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>

    {/* Create Table Body */}
                <tbody>
                    {data.map((item) => (
                            <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;