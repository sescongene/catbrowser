import React from "react";
import "./App.css";
import BreedPage from "./pages/Homepage.jsx";
import CatPage from "./pages/Cat.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={BreedPage} />
            <Route path="/:id" component={CatPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
