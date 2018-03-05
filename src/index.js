import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';
//import {robots} from './robots.js';
ReactDOM.render(
<App/>
, document.getElementById('root'));
registerServiceWorker();
