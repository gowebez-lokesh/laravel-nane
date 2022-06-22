import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './bootstrap'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById('root')
)