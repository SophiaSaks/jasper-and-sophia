import './App.scss';
import Navbar from './components/Navbar';
import RichTextEditor from './components/RichTextEditor';
import { Menu } from './components/Menu/Menu';
import { useThemeContext } from '@/context/useThemeContext';
import { Theme } from '@/context/theme.config';

function App() {
    const { themeName, setThemeName } = useThemeContext();

    return (
        <div className={`App ${themeName}`}>
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
