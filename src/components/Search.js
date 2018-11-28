import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchTerms from './SearchTerms';
import SearchButton from './SearchButton';

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
    saveSearchTerms: PropTypes.func.isRequired,
    searchHandler: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.classes = props.classes;
    this.saveSearchTerms = props.saveSearchTerms;
    this.callerSearchHandler = props.searchHandler;
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(searchTerms) {
    this.callerSearchHandler();
  }

  render() {
    return (
      <div className={this.classes.container} >
        <SearchTerms saveSearchTerms={this.saveSearchTerms} />
        <SearchButton clickHandler={this.searchHandler} />
      </div>
    );
   }
}

export default withStyles(styles)(Search);