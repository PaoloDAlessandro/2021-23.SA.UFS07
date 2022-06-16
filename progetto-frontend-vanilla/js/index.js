import "../css/index.css"
import "../img/sun.png"
import "../img/back.svg"
import "../fonts/stylesheet.css"
import "../CHANGELOG.md"
import React from "react";
import ReactDOM from "react-dom/client";
import {Pantry, Recipes} from "./App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function onClickAlert() {
    alert(`${new Date()}`);
}

window.onClickAlert = onClickAlert;

const reactRoot = ReactDOM.createRoot(
    document.getElementById("react-root")
);

reactRoot.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Pantry}/>
				<Route exact path="/recipes" component={Recipes}/>
	    </Switch>
    </Router>,
    React.createElement(Pantry));
