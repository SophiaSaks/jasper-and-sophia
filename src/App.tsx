import './App.scss';
import Navbar from './components/Navbar';
import RichTextEditor from './components/RichTextEditor';
import { Menu } from './components/Menu/Menu';
import { useEffect, useState } from 'react';
import { Theme } from './types/theme';

const defaultTheme = () => import('./theme/default.scss');
const alternativeTheme = () => import('./theme/alternative.scss');

const THEMES = {
    [Theme.DEFAULT]: defaultTheme,
    [Theme.ALTERNATIVE]: alternativeTheme,
};

function App() {
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
        <div className={`App ${themeName}-theme`}>
            <Navbar />

            <div className={`main-content text`}>
                <>
                    <Menu
                        items={[Theme.DEFAULT, Theme.ALTERNATIVE]}
                        onSelect={setThemeName}
                    />
                    <RichTextEditor />
                </>
            </div>
        </div>
    );
}

export default App;
