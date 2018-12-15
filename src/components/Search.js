import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchTerms from './SearchTerms';
import Button from './Button';
import BadComponent from './BadComponent';
import SearchErrorBoundary from './SearchErrorBoundary';

const styles = theme => ({
  container: {
    display: 'flex',
    margin: "1rem",
  },
});

class Search extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    publishSearchTerms: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchTerms: '',
    };

    this.classes = props.classes;
    this.publishSearchTerms = props.publishSearchTerms;
  }

  saveSearchTerms = (searchTerms) => {
    this.setState({ searchTerms: searchTerms });
  }

  resetSearchTerms = () => {
    this.setState({ searchTerms: '' });
  }

  clickHandler = () => {
    this.publishSearchTerms(this.state.searchTerms);
  }

  isVulgar= (phrase) => {
    const vulgarWords = ['darn', 'shucks', 'fudge'];
    return phrase.split(' ').reduce((result, word) => {
      return (result || vulgarWords.includes(word));
    }, false);
  }

  render = () => {
    return (
      <div className={this.classes.container} >
        <SearchErrorBoundary searchTerms={ this.state.searchTerms }
            resetSearchTerms={ this.resetSearchTerms }>
          { this.isVulgar(this.state.searchTerms) ? <BadComponent /> : null }
          <SearchTerms saveSearchTerms={this.saveSearchTerms} />
          <Button name="Search" clickHandler={this.clickHandler} />
        </SearchErrorBoundary>
      </div>
    );
  }
}

export default withStyles(styles)(Search);