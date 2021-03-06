import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    fontWeight: 800,
  },
  grow: {
    flexGrow: 1,
  },
};

const TopBar = (props) => {
  const { title, classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" className={classes.grow}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);