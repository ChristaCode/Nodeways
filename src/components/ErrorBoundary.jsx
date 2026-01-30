import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
          maxWidth: '600px',
          margin: '2rem auto',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px'
        }}>
          <h2 style={{ color: '#b91c1c', marginTop: 0 }}>Something went wrong</h2>
          <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
            {this.state.error?.message ?? String(this.state.error)}
          </pre>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '0.5rem 1rem',
              background: '#b91c1c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
