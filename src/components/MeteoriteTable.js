import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Meteorite from './Meteorite';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FFB564",
    color: "#3B3939",
    fontSize: 18,
    fontWeight: 600,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
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

class  MeteoriteTable extends React.Component {

  static propTypes = {
    meteoriteStrikes: PropTypes.array.isRequired,
    searchTerms: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 5,
    };

    this.classes = props.classes;
    this.meteoriteStrikes = props.meteoriteStrikes;
    this.searchTerms  = props.SearchTerms;

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const { classes, meteoriteStrikes, searchTerms } = this.props;
    const { rowsPerPage, page } = this.state;

    return (
      <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} padding="dense">
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
              </TableRow>
            </TableHead>
            <TableBody>
              {meteoriteStrikes
                .filter(strike => {
                  return searchTerms === '' ||
                        (strike.name).toLowerCase().includes(searchTerms.toLowerCase())
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(strike => {
                  return (
                    <Meteorite className={classes.row} key={strike.id} strike={strike} />
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={meteoriteStrikes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(MeteoriteTable);