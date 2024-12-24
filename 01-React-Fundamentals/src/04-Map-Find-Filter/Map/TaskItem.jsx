import React from 'react'

const TaskItem = ({ task }) => {
    // we use curly brackets for destructuring
    const {title, description, priority, status, assignedTo, dueDate} = task;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{priority}</p>
            <p>{status}</p>
            <p>{assignedTo}</p>
            <p>{dueDate}</p>
        </div>
    )
}

export default TaskItem
