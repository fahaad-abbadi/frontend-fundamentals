import React from 'react'

const Practice = ({ data }) => {

    return (
        <div>
            {/* Table Header */}
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>

            {/* Table Body */}
            <tbody>
                {/* since the rows keep repeating so therefore map is written on rows */}
                    {data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                            </tr>
                    ))}
            </tbody>
        </div>
    )
}

export default Practice;