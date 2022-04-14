import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_16';
import 'normalize.css';
import { AppProvider_16} from './context/appContext_16'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_16>
      <App />
    </AppProvider_16>
  </React.StrictMode>,
  document.getElementById('root')
);
