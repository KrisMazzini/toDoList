import clipboard from '../../assets/clipboard.svg'

import styles from './styles.module.css'

export function NoTasks() {
    return (
        <div className={styles.container}>
            <img src={clipboard} alt="clipboard icon" />
            <p>
                <span>You haven't registered tasks yet</span>
                Create tasks and organize your to-do list
            </p>
        </div>
    )
}