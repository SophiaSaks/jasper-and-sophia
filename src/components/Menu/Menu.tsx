import { Theme } from "@/types/theme"
import styles from './Menu.module.scss';

interface MenuProps {
    items: Theme[];
    onSelect: (item: Theme) => void;
}
export const Menu = ({ items, onSelect }: MenuProps) =>
    <ul className={styles["menu__container"]}>
        <>
            {items?.length > 0 ? items.map((item, index) => (
                <li key={index} className={styles["menu__item"]} onClick={() => onSelect(items[index])}>
                    <span className={styles["menu__label"]}>{item}</span>
                </li>)) : null}

        </>
    </ul>;
