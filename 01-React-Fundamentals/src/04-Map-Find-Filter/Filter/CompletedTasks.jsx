import React from 'react'

const CompletedTasks = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.status === 'Completed')

    return (
        <ul>
            {
                completedTasks.map((completedTask) => (
                    <li>
                        <h3>{completedTask.assignedTo}</h3>
                        <p>{completedTask.title}</p>
                        <p>{completedTask.description}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default CompletedTasks