import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Feedback from "./Feedback";
import Navbar from  "./Navbar"
import Footer from './footer'
import './App.scss';
import 'bulma/css/bulma.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import StateList from "./StateList";
import ErrorPage from "./Error";

ReactDOM.render(
  
  <React.StrictMode>
    <Navbar/>
    <Router>
      <Switch>
        <Route exact path="/404">
          <ErrorPage />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/listing">
          <Feedback />
        </Route>
        <Route path="/:state/:city?">
          <StateList />
        </Route>
      </Switch>
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
