import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import MeteoriteTable from './components/MeteoriteTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // App state
    this.state = {
      meteoriteStrikes: {},
      isDataLoaded: false
    };
  }

  async componentDidMount() {
    const response = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    const json = await response.json();
    this.setState({ meteoriteStrikes: json });
    this.setState({ isDataLoaded: true});
    console.log('meteoriteStrikes json: ', this.state.meteoriteStrikes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar title="Meteorite Explorer"/>
        </header>

        <section className="App-section">
          <BrowserRouter basename={ process.env.PUBLIC_URL }>
            <div>
              {this.state.isDataLoaded ?
                ( <MeteoriteTable meteoriteStrikes={ this.state.meteoriteStrikes } /> )
                : (' ')
              }
            </div>
          </BrowserRouter>
        </section>

        <footer className="App-footer">
          <BottomBar title="Data courtesy Nasa Open Data Portal"/>
        </footer>
      </div>
    );
  }
}

export default App;
