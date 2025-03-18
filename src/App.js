import './App.css';
import Navbar from './components/Navbar'
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-content">
        <RichTextEditor />
      </div>
      
    </div>
  );
}

export default App;
