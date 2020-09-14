import React from 'react';

import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './pages/SearchPage'
import './App.css';

function App() {
 
  return (  
    <div className="App">
        <Router>
          <Switch>
            <Route path="/search">
              <SearchPage/>
              {/* <h1>this is the search page</h1> */}
            </Route>
            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
