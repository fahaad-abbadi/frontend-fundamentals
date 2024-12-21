import React from 'react'

const HighPriorityTasks = ({ tasks }) => {
    const highPriorityTasks = tasks.filter((task) => task.priority === 'High');

    return (
        <ul>
            {
                highPriorityTasks.map((highPriorityTask) => 
                    <li>
                        <h3>{highPriorityTask.assignedTo}</h3>
                        <p>{highPriorityTask.title}</p>
                        <p>{highPriorityTask.description}</p>
                        <p>{highPriorityTask.dueDate}</p>
                        <br />
                    </li>
                )
            }
        </ul>
    )
}

export default HighPriorityTasks