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

const Search = (props) => {
  const { classes, saveSearchTerms, searchHandler } = props;
  return (
    <div className={classes.container} >
      <SearchTerms saveSearchTerms={saveSearchTerms} />
      <SearchButton clickHandler={searchHandler} />
    </div>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  saveSearchTerms: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(Search);