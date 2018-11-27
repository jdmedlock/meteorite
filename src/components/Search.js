import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchTerms from './SearchTerms';
import SearchButton from './SearchButton';

const styles = theme => ({
  container: {
    display: 'flex',
    backgroundColor: theme.palette.common.white,
  },
});

const Search = (props) => {
  const { classes } = props;
  return (
    <div className={classes.input}>
      <SearchTerms />
      <SearchButton />
    </div>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);