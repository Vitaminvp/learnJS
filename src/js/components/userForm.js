import React from 'react';

export class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
    }
    handleChange = (event) => {
        const inputValue = event.target.value;
        const maxValueLength = 10;
        this.setState({
            username: inputValue.length < maxValueLength ? event.target.value : this.state.username
        });
        console.log(event.target.value)
    };
    render(){
        return <input type="text" value = {this.state.username} onChange={this.handleChange}/>;
    }
}