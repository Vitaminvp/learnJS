import React from 'react';

export default (OriginalComponent) => class accordion extends React.Component{

    static defaultProps={
        defaultId: []
    };
    constructor(props){
        super(props);

        this.state={
            articleOpenId: this.props.defaultId
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
        return <OriginalComponent {...this.props} id={this.state.articleOpenId} defaultId = {this.props.defaultId}  handleClick={this.toggleOpen }/>
    }
}