import { useState } from 'react';
import { Circle, CheckCircle, Trash } from 'phosphor-react'

import styles from './styles.module.css'

export interface TaskProps {
    id: string;
    description: string;
    checked: boolean;
    createdAt: Date;
}

interface Props extends TaskProps {
    deleteTask: (taskID:string) => void;
    toggleCheck: (taskID:string) => void;
}

export function Task({id, description, checked, deleteTask, toggleCheck}:Props) {
    const uncheckedIcon = <Circle size={24} color='var(--blue)' weight='bold' />
    const checkedIcon = <CheckCircle size={24} color='var(--purple-dark)' weight='fill' />
    const checkbox = checked ? checkedIcon : uncheckedIcon

    const paragraphClassName = checked ? styles.checkedParagraph : "";

    function handleCheck() {
        toggleCheck(id)
    }

    function handleDeleteTask() {
        deleteTask(id)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <button className={styles.button} onClick={handleCheck}>
                    {checkbox}
                </button>
                <p onClick={handleCheck} className={paragraphClassName}>
                    {description}
                </p>
            </div>
            <button
                className={`${styles.button} ${styles.trashButton}`}
                onClick={handleDeleteTask}
            >
                <Trash size={24} />
            </button>
        </div>
    )
}