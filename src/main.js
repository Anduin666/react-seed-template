
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import {Provider} from 'mobx-react';
import Route from './routes'


ReactDOM.render(<Provider>{Route}</Provider>, document.getElementById('app'));
