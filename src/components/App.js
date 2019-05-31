import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

import { Route, NavLink, Switch } from 'react-router-dom';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Home from './Home'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
  state = {
    dropdownOpen: false,
  }

  toggle = () => {
      this.setState( prevState => {
        return {dropdownOpen: !prevState.dropdownOpen}
      })
  }

  renderNavBar() {
    return (
      <div className="navbar">
        <NavLink className="navlink" to="/">HOME</NavLink>
        <NavLink className="navlink" to="/experience">EXPERIENCE</NavLink>
        <NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink>

        <NavLink className="navlink" to="/contact">CONTACT</NavLink>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.renderNavBar() }

        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route exact path="/experience" component={props => <Experience {...props} />} />
          <Route exact path="/portfolio" component={props => <Portfolio {...props} page="main"/>} />
          <Route exact path="/contact" component={props => <Contact {...props} />} />
          <Route exact path="/portfolio/art" component={props => <Portfolio {...props} page="art"/>} />
          <Route exact path="/portfolio/code" component={props => <Portfolio {...props} page="code"/>} />
        </Switch>

      </div>
    );
  }
}

export default App;
