import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store="store">
        <Home />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
