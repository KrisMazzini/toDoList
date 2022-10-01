import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './styles.module.css'

import { Task, TaskProps } from '../Task'

export function TaskList() {
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: uuid(),
            description: "Task 1",
            checked: false,
            createdAt: new Date("2022-08-09T09:23Z")
        },
        {
            id: uuid(),
            description: "Task 2",
            checked: true,
            createdAt: new Date("2022-09-29T23:13Z")
        }
    ])

    const sortedTasks = tasks.sort(sortTasks)

    function sortTasks(taskA:TaskProps, taskB:TaskProps) {
        const sameStatus = taskA.checked === taskB.checked
        
        if (!sameStatus) {
            const isADone = taskA.checked
            return isADone ? 1 : -1
        }

        const ACreatedAfterB = taskA.createdAt.getTime() > taskB.createdAt.getTime()
        return ACreatedAfterB ? 1 : -1

    }

    function toggleCheck(taskID:string) {
        const updatedTasks = tasks.map(task => {
            const isCurrentTask = task.id === taskID

            if (!isCurrentTask) {
                return task
            }

            const updatedTask = {
                ...task,
                checked: !task.checked
            }

            return updatedTask
        })

        setTasks([...updatedTasks])
    }

    function deleteTask(taskID:string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskID)

        setTasks(tasksWithoutDeletedOne)
    }

    return (
        <div className={styles.container}>
            {
                sortedTasks.map(task => {
                    return (
                        <Task
                            {...task}
                            key={task.id}
                            deleteTask={deleteTask}
                            toggleCheck={toggleCheck}
                        />
                    )
                })
            }
        </div>
    )
}