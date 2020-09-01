import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
          </Switch>
      </main>
  )
}

export default App;