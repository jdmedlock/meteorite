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
    fontSize: 16,
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

const Meteorite = (props) => {
  const { strike, classes } = props;
  const mass = Number.parseFloat(strike.mass).toFixed(0);
  const impactYear = (strike.year) != null ? strike.year.split('-')[0] : "undefined";

  return (
    <TableRow className={classes.row} key={strike.id}>
      <CustomTableCell component="th" scope="row">{strike.name}</CustomTableCell>
      <CustomTableCell numeric>{strike.id}</CustomTableCell>
      <CustomTableCell>{strike.nametype}</CustomTableCell>
      <CustomTableCell>{strike.recclass}</CustomTableCell>
      <CustomTableCell numeric>{mass}</CustomTableCell>
      <CustomTableCell>{strike.fall}</CustomTableCell>
      <CustomTableCell numeric>{impactYear}</CustomTableCell>
      <CustomTableCell numeric>{strike.reclat}</CustomTableCell>
      <CustomTableCell numeric>{strike.reclong}</CustomTableCell>
    </TableRow>
  );
}

Meteorite.propTypes = {
  strike: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Meteorite);