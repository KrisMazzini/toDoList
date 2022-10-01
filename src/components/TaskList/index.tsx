import { Dispatch, SetStateAction } from 'react'

import styles from './styles.module.css'

import { Task, TaskProps } from '../Task'
import { SummaryInfo } from '../SummaryInfo'

interface Props {
    tasks: TaskProps[],
    setTasks: Dispatch<SetStateAction<TaskProps[]>>,
}

export function TaskList({tasks, setTasks}:Props) {

    const sortedTasks = tasks.sort(sortTasks)

    const numberOfTasks = tasks.length;
    const numberOfCompletedTasks = tasks.filter(task => {
        return task.checked
    }).length

    const completedPercentage = (
        numberOfTasks === 0 ? 0 : (numberOfCompletedTasks / numberOfTasks) * 100
    )

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
            <div className={styles.summary}>
                <SummaryInfo
                    name='Created tasks'
                    value={numberOfTasks}
                    color='blue'
                />
                <SummaryInfo
                    name="Done"
                    value={`${numberOfCompletedTasks} of ${numberOfTasks}`}
                    color= 'purple'
                />
            </div>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBar}
                    style={{width: `${completedPercentage}%`}}
                />
            </div>
            <div className={styles.tasks}>
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
        </div>
    )
}