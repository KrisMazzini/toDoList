import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './styles.module.css'
import { PlusCircle} from "phosphor-react"

import { TaskProps } from '../Task'

interface Props {
    setTasks: Dispatch<SetStateAction<TaskProps[]>>,
}

export function AddTask({setTasks}:Props) {
    const [newTaskDescription, setNewTaskDescription] = useState<string>('')

    const disableButton = !newTaskDescription.length

    function focusOnInput() {
        const input = document.querySelector(`.${styles.form} input`) as HTMLInputElement
        input?.focus()
    }

    function handleAddNewTask(event:FormEvent) {
        event.preventDefault()

        const newTask:TaskProps = {
            id: uuid(),
            description: newTaskDescription,
            checked: false,
            createdAt: new Date(),
        }

        setTasks(prevTasks => [...prevTasks, newTask])
        setNewTaskDescription('')

        focusOnInput()
    }

    function handleChangeInput(event:ChangeEvent<HTMLInputElement>) {
        const description = event.target.value
        setNewTaskDescription(description)
    }

    return (
        <form className={styles.form}>
            <input
                type="text"
                placeholder='Add a new task'
                value={newTaskDescription}
                onChange={handleChangeInput}
                required
            />
            <button
                type='submit'
                onClick={handleAddNewTask}
                disabled={disableButton}
            >
                Create
                <PlusCircle size={16} weight="bold" color='var(--gray-100)'/>
            </button>
        </form>
    )
}