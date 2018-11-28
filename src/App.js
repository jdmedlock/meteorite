import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import './App.css';
import TopBar from './components/TopBar';
import Search from './components/Search';
import MeteoriteTable from './components/MeteoriteTable';
import BottomBar from './components/BottomBar';

class App extends Component {
  constructor(props) {
    super(props);

    // App state
    this.state = {
      meteoriteStrikes: {},
      isDataLoaded: false,
      searchTerms: ''
    };
  }

  async componentDidMount() {
    const response = await fetch("https://data.nasa.gov/resource/y77d-th95.json");
    const json = await response.json();
    this.setState({ meteoriteStrikes: json });
    this.setState({ isDataLoaded: true});
    console.log('meteoriteStrikes json: ', this.state.meteoriteStrikes);
  }

  saveSearchTerms(searchTerms) {
    console.log('saveSearchTerms: searchTerms: ', searchTerms);
    this.setState({searchTerms: searchTerms});
  }

  searchHandler(event) {
    console.log('searchHandler triggered. event: ', event);
    // TODO: Add search logic
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar title="Meteorite Explorer"/>
        </header>

        <section className="App-search">
          <Search saveSearchTerms={this.saveSearchTerms} 
            searchHandler={this.searchHandler} />
        </section>

        <section className="App-results">
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
          <BottomBar title="Data courtesy Nasa Open Data Portal"
            href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh" />
        </footer>
      </div>
    );
  }
}

export default App;
