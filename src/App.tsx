import './App.scss';
import Navbar from './components/Navbar';
import RichTextEditor from './components/RichTextEditor';
import { Menu } from './components/Menu/Menu';
import { useThemeContext } from './context/useThemeContext';
import { Theme } from './context/theme.config';
import { useState } from 'react';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const { themeName, setThemeName } = useThemeContext();

    return (
        <div className={`App ${themeName}`}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>

            <div className={`main-content text`}>
                <>
                {isOpen &&
                <Menu
                    items={[Theme.DEFAULT, Theme.ALTERNATIVE]}
                    onSelect={setThemeName}
                />
                }
                    <RichTextEditor />
                </>
            </div>
        </div>
    );
}

export default App;
