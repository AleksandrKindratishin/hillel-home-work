
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error occurred:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Щось пішло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
