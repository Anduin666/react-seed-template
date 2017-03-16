
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router'
import {Provider} from 'mobx-react';


ReactDOM.render(<Provider>hello,world!</Provider>, document.getElementById('app'));
