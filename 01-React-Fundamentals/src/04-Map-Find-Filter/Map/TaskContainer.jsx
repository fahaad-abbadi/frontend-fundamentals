import React from 'react';
import TaskItem from './TaskItem';

const TaskContainer = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                    <TaskItem key = {task.id} task = {task}/>
                ))
            }
        </div>
    )
}

export default TaskContainer