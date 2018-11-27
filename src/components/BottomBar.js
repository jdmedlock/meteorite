import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const BottomBar = (props) => {
  const { title, href, classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit" className={classes.grow}>
          <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

BottomBar.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);