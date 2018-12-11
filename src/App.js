import React, { Component } from 'react';

import './App.css';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import TopBar from './components/TopBar';
import Search from './components/Search';
import MeteoriteTable from './components/MeteoriteTable';
import BottomBar from './components/BottomBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meteoriteStrikes: {},
      isDataLoaded: false,
      searchTerms: '',
    };

    this.publishSearchTerms = this.publishSearchTerms.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_METEORITE_STRIKE_DATASET)
    .then((response) => {
      return response.json();
    })
    .then((strikesJSON) => {
      this.setState({ meteoriteStrikes: strikesJSON });
      this.setState({ isDataLoaded: true});
    });
  }

  publishSearchTerms(searchTerms) {
    this.setState({ searchTerms: searchTerms });
  }

  render() {
    return (
      <div className="App">
        <GlobalErrorBoundary>
          <header className="App-header">
            <TopBar title="Meteorite Explorer"/>
          </header>

          <section className="App-search">
            <Search publishSearchTerms={this.publishSearchTerms} />
          </section>

          <section className="App-results">
            <div>
              {this.state.isDataLoaded ?
                ( <MeteoriteTable meteoriteStrikes={ this.state.meteoriteStrikes }
                    searchTerms={ this.state.searchTerms } /> )
                : (' ')
              }
            </div>
          </section>

          <footer className="App-footer">
            <BottomBar title="Data courtesy Nasa Open Data Portal"
              href={ process.env.REACT_APP_METEORITE_LANDING_HOMEPAGE } />
          </footer>
          </GlobalErrorBoundary>
      </div>
    );
  }
}

export default App;
