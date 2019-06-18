import React, { Component } from 'react';

const TITLES = [
    'I am a front-end developer',
    'I like to write code with freedom',
    'Javascript moves me to write code',
    'I hope to have a good knowledge of java script'
];

class Title extends Component{
    state = { titleIndex : 0,fadeIn : true};
    
    componentDidMount(){
        this.setTimeout=setTimeout(()=>{this.setState({fadeIn:false})},2000);
        this.animateTitle();
    }
    
    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.setTimeout);
    }

    animateTitle = () =>{
        this.titleInterval = setInterval(() =>{
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex,fadeIn:true});
            this.setTimeout=setTimeout(()=>{this.setState({fadeIn:false})},2000);
        },4000);
    }

    render(){
        const {titleIndex,fadeIn} = this.state;
        const title = TITLES[titleIndex];
        return(
            <h3 className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</h3>
        )
    }
}

export default Title;