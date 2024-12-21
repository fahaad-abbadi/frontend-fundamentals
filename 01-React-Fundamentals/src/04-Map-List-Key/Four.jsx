import React from 'react'
import TaskContainer from './Map/TaskContainer'
import tasks from './Data/tasks'
import CompletedTasks from './Filter/CompletedTasks'
import HighPriorityTasks from './Filter/HighPriorityTasks'
import FindTask from './Find/FindTask'


const Four = () => {
  return (
    <div>
        {/* <TaskContainer tasks={tasks}/> */}
        {/* <CompletedTasks tasks = {tasks}/> */}
        {/* <HighPriorityTasks tasks = {tasks}/> */}
        <FindTask tasks = {tasks}/>
    </div>
  )
}

export default Four