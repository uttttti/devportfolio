import React, { ErrorInfo } from 'react';
import './ErrorBoundary.scss';
import { Typography, Container } from '@material-ui/core';

export interface ErrorBoundaryProps {
	children(error?: Error): React.ReactNode;
}

interface ErrorBoundaryState {
  error?: Error;
  errorInfo? :ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Container className="ErrorBoundary">
          <Typography variant="h6" className="message">Something went wrong.</Typography>
          <details className="ditails">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </Container>
      );
    }
    return this.props.children()
  }  
}

export default ErrorBoundary;
