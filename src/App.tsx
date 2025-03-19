import './App.css';
import './theme/theme.scss';
import Navbar from './components/Navbar'
import RichTextEditor from './components/RichTextEditor';
import { Menu } from "./components/Menu/Menu";
import { useState } from 'react';
import { Theme } from './types/theme';

function App() {
    const [themeName, setThemeName] = useState<Theme>(Theme.DEFAULT);

    return (
        <div className={`App ${themeName}-theme`}>
            <Navbar />

            <div className={`main-content`}>
                <>
                    <Menu items={[Theme.DEFAULT, Theme.ALTERNATIVE]} onSelect={setThemeName} />
                    <RichTextEditor />
                </>
            </div>

        </div>
    );
}

export default App;
