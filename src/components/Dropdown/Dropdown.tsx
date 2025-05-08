import styles from './Dropdown.module.scss'

interface DropdownButtonProps {
    buttonLabel: string;
    chlidItems: DropdownButtonProps[];
}


export const Dropdown = (props: DropdownButtonProps) => {
    return <div className={styles['dropdown']}></div>
}
