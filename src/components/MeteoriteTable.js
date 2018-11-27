import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Meteorite from './Meteorite';

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

const MeteoriteTable = (props) => {
  console.log('props: ', props);
  const { classes, meteoriteStrikes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell numeric>Id</CustomTableCell>
            <CustomTableCell>Name Type</CustomTableCell>
            <CustomTableCell>Rec Class</CustomTableCell>
            <CustomTableCell numeric>Mass (g)</CustomTableCell>
            <CustomTableCell>Fall</CustomTableCell>
            <CustomTableCell>Year</CustomTableCell>
            <CustomTableCell>Latitude</CustomTableCell>
            <CustomTableCell>Longitude</CustomTableCell>
            <CustomTableCell>Geo Location</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meteoriteStrikes.map(strike => {
            return (
              <Meteorite className={classes.row} key={strike.id} strike={strike} />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

MeteoriteTable.propTypes = {
  meteoriteStrikes: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeteoriteTable);