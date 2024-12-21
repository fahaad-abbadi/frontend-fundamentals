import React from 'react'

const FindTask = ({ tasks }) => {
    const findTask = tasks.find((task) => task.id === 2)

    return (
        <div>
            <h3>{findTask.assignedTo}</h3>
            <p>{findTask.title}</p>
            <p>{findTask.description}</p>
            <p>{findTask.status}</p>
        </div>
    )
}

export default FindTask