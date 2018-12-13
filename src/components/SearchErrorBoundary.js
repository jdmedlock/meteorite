import React from 'react';
import { createIssue } from '../utils/createIssue';

class SearchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      issueTicketJSON: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  async componentDidCatch(error, info) {
    if (process.env.NODE_ENV === 'development') {
      console.log(info);
    }
    try {
      const issueResults = await createIssue('Search error', 'Test bug report generation');
      this.setState({ issueTicketJSON: issueResults });
    }
    catch(error) {
      console.log('error: ', error);
      throw new Error('Unable to create issue ticket');
    }
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
              &nbsp;GitHub
            </a>
          </h5>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default SearchErrorBoundary;