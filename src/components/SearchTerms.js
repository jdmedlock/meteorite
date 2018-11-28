import React from 'react';
import PropTypes from 'prop-types';
import debounce from "lodash.debounce";
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

class Search extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    saveSearchTerms: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    // SearchPage state
    this.state = {
      searchTerms: "",
    };

    // Bind 'this' to the event handlers so they'll have the proper context
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounce = debounce(this.queryName, 150);

    this.classes = props.classes;
    this.saveSearchTerms = props.saveSearchTerms;
  }

  handleChange(event) {
    // Add input entered by the user to the searchText element in
    // our state. Keystrokes are debounced to prevend the queryLocation function
    // from being called too many times in succession to reduce overhead.
    this.emitChangeDebounce(event.target.value);
  }

  queryName(enteredText) {
    console.log('queryName - enteredText: ', enteredText);
    this.setState({ searchTerms: enteredText });
    this.saveSearchTerms(enteredText);
  }

  render() {
    return (
      <Input
        placeholder="Enter search terms"
        className={this.classes.input}
        variant="outlined"
        onChange={ this.handleChange }
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    );
  }
}

export default withStyles(styles)(Search);