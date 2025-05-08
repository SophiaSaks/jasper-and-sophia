import { Dropdown } from '../Dropdown/Dropdown';
import './Menu.scss';
import { Theme } from '@/context/theme.config';

interface MenuProps {
    items: Theme[];
    onSelect: (item: Theme) => void;
}

export const Menu = ({ items, onSelect }: MenuProps) => (
    <ul className={'menu__container'}>
        <>
            {items?.length > 0
                ? items.map((item, index) => (
                    <li
                        key={index}
                        className={'menu__item'}
                        onClick={() => onSelect(item)}>
                        <span className={'menu__label'}>{item}</span>
                    </li>
                ))
                : null}
            <li
                className={'menu__item'}
                onClick={() => alert('You have clicked a temporary item!')}>
                <Dropdown
                    buttonLabel={'Button Label'}
                    childItems={[
                        {
                            buttonLabel: "Button Label 2",
                            childItems: []
                        }
                    ]}
                />
            </li>
        </>
    </ul>
);
