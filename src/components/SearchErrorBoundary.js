import React from 'react';
import PropTypes from 'prop-types';
import { createIssue } from '../utils/createIssue';
import Button from './Button';

class SearchErrorBoundary extends React.Component {

  static propTypes = {
    searchTerms: PropTypes.string.isRequired,
    resetSearchTerms: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      issueTicketJSON: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  async componentDidCatch(error, info) {
    if (process.env.NODE_ENV === 'development') {
      console.log(info);
    }
    try {
      const issueResults = await createIssue(`Error encountered searching for "${this.props.searchTerms}"`, info, error);
      this.setState({ issueTicketJSON: issueResults });
    }
    catch(error) {
      console.log('error: ', error);
      throw new Error('Unable to create issue ticket');
    }
  }

  clickHandler() {
    this.props.resetSearchTerms();
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>You searched for a vulgar word! "{ this.props.searchTerms }" is prohibited.</h3>
          <h5>
            An issue has been automatically created for this error on
            <a 
              href={ this.state.issueTicketJSON ? this.state.issueTicketJSON.html_url : ' ' }
              target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </h5>
          <Button name="Dismiss" clickHandler={this.clickHandler} />
        </div>
      );
    }

    return this.props.children; 
  }
}

export default SearchErrorBoundary;