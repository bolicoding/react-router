import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Navigation from './navigation/navigation'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <Navigation />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
