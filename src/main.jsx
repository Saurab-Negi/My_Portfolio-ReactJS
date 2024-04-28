import ReactDOM from 'react-dom';
import App from './App.jsx'
import { ThemeProvider } from './Context.jsx'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);