import styles from './Dropdown.module.scss'

interface DropdownButtonProps {
    buttonLabel: string;
    childItems: DropdownButtonProps[];
}


export const Dropdown = (props: DropdownButtonProps) => {
    return <div className={styles['dropdown']}>{props.buttonLabel}</div>
}
