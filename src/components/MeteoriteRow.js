import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const MeteoriteRow = (props) => {
  const { strike, classes } = props;

  return (
    <TableRow className={classes.strike} key={strike.id} >
      <CustomTableCell component="th" scope="row">{strike.name}</CustomTableCell>
      <CustomTableCell numeric>{strike.id}</CustomTableCell>
    </TableRow>
  );
}

MeteoriteRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeteoriteRow);