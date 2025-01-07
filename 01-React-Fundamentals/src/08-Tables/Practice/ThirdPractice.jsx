import React from 'react'

const ThirdPractice = ({ data }) => {
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
                {
                    data.map((item) => (
                        <tr key = {item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))
                }
            </tbody>
        </div>
    )
}

export default ThirdPractice