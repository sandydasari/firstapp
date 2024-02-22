import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store'
import './bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


serviceWorker.unregister()
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
