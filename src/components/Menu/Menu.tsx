import { Theme } from '@/types/theme';
import './Menu.scss';

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
        </>
    </ul>
);
