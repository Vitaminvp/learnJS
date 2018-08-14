import React from 'react';
import './userForm.css';
const limits = {
    user: {
        min:5,
        max:15
    },
    text: {
        min:5,
        max:15
    }
};
export class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            text: ""
        }
    }

    handleChange = type => event => {
        const { value } = event.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        });
    };
    handleSubmit = event => {
      event.preventDefault();
      this.setState({
          user: "",
          text: ""
      })
    };
    getClassName = type => {
        return this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : '';
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
               User: <input type="text" value={this.state.user} onChange={this.handleChange('user')} className= {this.getClassName('user')} />
               Comment: <input type="text" value={this.state.text} onChange={this.handleChange('text')} className= {this.getClassName('text')} />
                <input type="submit" value = "отправить"/>
            </form>
        );
    }
}