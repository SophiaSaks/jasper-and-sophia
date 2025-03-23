import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';
import { ThemeProvider } from './context/ThemeProvider';

const root = document.getElementById('root');
if (!root) {
    createRoot(document.getElementsByTagName('body')[0]).render(<App />);
    throw new Error('No root element found');
}
createRoot(root!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
