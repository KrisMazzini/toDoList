import styles from './styles.module.css'

import { AddTask } from "../../components/AddTask"
import { Header } from "../../components/Header"
import { TaskList } from '../../components/TaskList'

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AddTask />
        <TaskList />
      </main>
    </>
  )
}