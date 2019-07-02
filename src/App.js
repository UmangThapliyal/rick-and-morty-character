import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./Components/layout/Navbar";
import Characters from "./Components/Characters";
import Character from "./Components/CharacterPage";

function App() {
  return (
	<Router>
    <React.Fragment>
      <Navbar />
	  <Switch>
		<Route exact path="/" component={Characters} />
		<Route exact path="/character/:id" component={Character} />
	  </Switch>
	</React.Fragment>
	</Router>
  );
}

export default App;
