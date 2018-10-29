import React from 'react';
import ReactDOM from 'react-dom';
import App from './home/index';
import { Provider } from 'mobx-react';
import store from './home/store/index';

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));
