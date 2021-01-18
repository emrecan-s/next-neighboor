import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Feedback from './Feedback';
import {  BrowserRouter as Router,
Switch, Route } from 'react-router-dom';

ReactDOM.render(
<React.StrictMode>
<Router>
<Switch>
<Route exact path="/listing">
<Feedback/>
</Route>
<Route exact path="/">
<App/>
</Route>
</Switch>
</Router>
</React.StrictMode>,
	document.getElementById('root')
	);
