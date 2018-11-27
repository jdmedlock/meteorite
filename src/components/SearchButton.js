import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    backgroundColor: theme.palette.secondary.light,
    fontWeight: 600,
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const SearchButton = (props) => {
  const { classes } = props;
  return (
    <Button variant="contained" className={classes.button}>
      Search
    </Button>
  );
}

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);