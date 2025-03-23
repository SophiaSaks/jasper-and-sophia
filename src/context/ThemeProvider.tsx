import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import { Theme, THEMES } from './theme.config';

interface ThemeContextState {
    themeName: Theme;
    setThemeName: Dispatch<SetStateAction<Theme>> | (() => void);
}

export const ThemeContext = createContext<ThemeContextState>({
    themeName: Theme.DEFAULT,
    setThemeName: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [themeName, setThemeName] = useState<Theme>(Theme.DEFAULT);

    useEffect(() => {
        const getTheme = async () => {
            await THEMES[themeName]();
            const existingLink = document.getElementById('theme-link');
            if (existingLink) {
                existingLink.remove();
            }

            const link = document.createElement('link');
            link.id = 'theme-link';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        };
        getTheme();
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
};
