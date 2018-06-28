import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import MyHeader from './MyHeader';
import Home from './Home';
import Rubbish from './Rubbish';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
        <MyHeader />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/rubbish" component={Rubbish} />
                    </div>
                </Router>
      </div>
    );
  }
}

export default App;
