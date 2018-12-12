import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchTerms from './SearchTerms';
import SearchButton from './SearchButton';
import BadComponent from './BadComponent';

const styles = theme => ({
  container: {
    display: 'flex',
    backgroundColor: theme.palette.common.white,
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
    this.clickHandler = this.clickHandler.bind(this);
    this.saveSearchTerms = this.saveSearchTerms.bind(this);
  }

  saveSearchTerms(searchTerms) {
    this.setState({ searchTerms: searchTerms });
  }

  clickHandler() {
    this.publishSearchTerms(this.state.searchTerms);
  }

  render() {
    return (
      <div className={this.classes.container} >
        <BadComponent />
        <SearchTerms saveSearchTerms={this.saveSearchTerms} />
        <SearchButton clickHandler={this.clickHandler} />
      </div>
    );
   }
}

export default withStyles(styles)(Search);