import React from 'react';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  }

  componentDidCatch = (error, info) => {
    console.log('info: ', info);
    console.log('error: ', error);
  }

  render = () => {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Meteorite Explorer encountered an error! Oh My!</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default GlobalErrorBoundary;