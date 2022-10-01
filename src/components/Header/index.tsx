import styles from './styles.module.css'

import logo from '../../assets/rocket-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="ToDo Logo" />
        </header>
    )
}