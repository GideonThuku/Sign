
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error('ErrorBoundary', error, info); }
  render() {
    if (this.state.hasError) {
      return <div role="alert" className="p-6 text-red-700">Something went wrong. Please reload.</div>;
    }
    return this.props.children;
  }
}
