import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
