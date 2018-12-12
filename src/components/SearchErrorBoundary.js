import React from 'react';

class SearchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>You searched for a vulgar word! "{this.props.searchTerms}" is prohibited</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default SearchErrorBoundary;