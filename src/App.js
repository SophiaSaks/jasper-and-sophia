import './App.css';
import Navbar from './components/Navbar'
import RichTextEditor from './components/RichTextEditor';
import {Menu} from "./components/Menu";

function App() {
    return (
        <div className="App">
            <Navbar/>

            <div className="main-content">
                <>
                    <Menu/>
                    <RichTextEditor/>
                </>
            </div>

        </div>
    );
}

export default App;
