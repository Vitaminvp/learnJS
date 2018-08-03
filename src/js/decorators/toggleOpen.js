import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.Component{
    constructor(){
        super();
        this.state={
            isOpen: false
        };
    }
    handleClick(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} handleClick={this.handleClick.bind(this)}/>
    }
}