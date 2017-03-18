import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import {Provider} from 'mobx-react';
import Route from './routes'
import '@/assets/react.less'
import * as stores from './stores';
import {AppContainer} from 'react-hot-loader'


ReactDOM.render(<AppContainer><Provider { ...stores }>{Route}</Provider></AppContainer>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}
