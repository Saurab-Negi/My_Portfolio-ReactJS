import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import './index.css'
import { ThemeProvider } from './Context.jsx';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
