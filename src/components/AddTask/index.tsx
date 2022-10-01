import { FormEvent } from 'react'

import styles from './styles.module.css'
import { PlusCircle} from "phosphor-react"

export function AddTask() {

    function handleAddNewTask(event:FormEvent) {
        event.preventDefault()
    }

    return (
        <form className={styles.form}>
            <input type="text" placeholder='Add a new task'/>
            <button type='submit' onClick={handleAddNewTask}>
                Create
                <PlusCircle size={16} weight="bold" color='var(--gray-100)'/>
            </button>
        </form>
    )
}