import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AxiosApi from './components/AxiosApi'; 
import Accueil from './components/Accueil';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/meteo">
            <AxiosApi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
