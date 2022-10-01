import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './styles.module.css'

import { AddTask } from "../../components/AddTask"
import { Header } from "../../components/Header"
import { TaskList } from '../../components/TaskList'

import { TaskProps } from '../../components/Task'

export function Home() {
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
  
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <AddTask setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </main>
    </div>
  )
}