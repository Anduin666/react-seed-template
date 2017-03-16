import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import {Provider} from 'mobx-react';
import Route from './routes'
import '@/assets/react.less'


ReactDOM.render(<Provider>{Route}</Provider>, document.getElementById('app'));
