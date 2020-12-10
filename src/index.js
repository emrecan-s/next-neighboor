import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Feedback from './Feedback';
import reportWebVitals from './reportWebVitals';
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
	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();