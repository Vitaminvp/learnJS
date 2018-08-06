import React from 'react';

export default (OriginalComponent) => class accordion extends React.Component{
    constructor(){
        super();
        this.state={
            articleOpenId: null
        }
    }
    toggleOpen = id =>{
        if(this.state.articleOpenId == id){
            this.setState({
                articleOpenId: null
            });
        } else {
            this.setState({
                articleOpenId: id
            });
        }
    };
    render(){
        return <OriginalComponent {...this.props} id={this.state.articleOpenId} handleClick={this.toggleOpen }/>
    }
}