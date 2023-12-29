import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    render() {
        if (this.state.hasError) {
            return <PageNotFound />
        }

        return this.props.children;
    }
}