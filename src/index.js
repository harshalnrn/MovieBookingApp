import React from 'react';            //'react is a package'
import ReactDOM from 'react-dom';     //react-dom is a package
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
