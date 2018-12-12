import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    backgroundColor: theme.palette.primary.light,
    fontWeight: 600,
    margin: theme.spacing.unit,
  },
});

const SearchButton = (props) => {
  const { classes, clickHandler } = props;
  return (
    <Button variant="contained" className={classes.button} onClick={clickHandler} >
      Search
    </Button>
  );
}

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchButton);