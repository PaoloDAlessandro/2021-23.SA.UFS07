import "../css/index.css"
import "../img/sun.png"
import "../img/back.svg"
import "../fonts/stylesheet.css"
import "../CHANGELOG.md"
import React from "react";
import ReactDOM from "react-dom/client";
import {Pantry, Recipes, Account} from "./App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { func } from "prop-types"

const searchRecipes = document.getElementById("searchRecipes");

if (searchRecipes !== null) {

    console.log("ciao");
}
//searchRecipes.addEventListener("onkeypress", filterRecipes(this.value));

function filterRecipes(input){
    console.log(input);
}

const reactRoot = ReactDOM.createRoot(
    document.getElementById("react-root")
);

reactRoot.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Pantry}/>
				<Route exact path="/recipes" component={Recipes}/>
				<Route exact path="/account" component={Account}/>
	    </Switch>
    </Router>,
    React.createElement(Pantry));
