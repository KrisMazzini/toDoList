import styles from './styles.module.css'

interface Props {
    name: string;
    value: string | number;
    color: 'blue' | 'purple';
}

export function SummaryInfo({name, value, color}:Props) {
    return (
        <div className={styles.container}>
            <p style={{color: `var(--${color})`}}>{name}</p>
            <span>{value}</span>
        </div>
    )
}