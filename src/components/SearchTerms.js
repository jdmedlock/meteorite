import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    backgroundColor: theme.palette.common.white,
    margin: theme.spacing.unit,  },
});

const Search = (props) => {
  const { classes } = props;
  return (
    <Input
      placeholder="Enter search terms"
      className={classes.input}
      variant="outlined"
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);