const MENU_ITEMS = [
    "Item 1",
    "Item 2",
    "Item 3",
];

export const Menu = () =>
    <ul className="menu__container">
        <>
            {MENU_ITEMS.map((item, index) => (
                <li key={index} className="menu__item">
                    <span className="menu__label">{item}</span>
                </li>))}

        </>
    </ul>;
