import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Dynamically import themes
const themes = {
    'one': () => import('./theme/theme_one.css'),
    'default': () => import('./theme/theme_default.css')
};

// Conditionally import a theme from the themes object
const process_theme = process.env.APP_THEME;
const loadTheme = themes[process_theme] || themes.default;

loadTheme().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
