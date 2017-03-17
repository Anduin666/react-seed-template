/**
 * 路由配置
 * */
import React from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory, hashHistory} from 'react-router';
import App from '../view/index'

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
    </Router>
);

export default RouteConfig;
