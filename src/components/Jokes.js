import React, {Component} from 'react';
class Jokes extends Component{
    state = { joke: {},displayJokes : false,jokes: [] };
    
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke:json}))
        .catch(error => alert(error));
    }

    toggleDisplayJokes = () => {
        this.setState({displayJokes:!this.state.displayJokes});
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes:json}))
        .catch(error => alert(error));
    }

    render(){
        const {setup,punchline} = this.state.joke;
        return(
            <div style={{margin:50}}>
                <h2>Highlighted Jokes</h2>
                <p>{setup} <strong>{punchline}</strong></p>
                <h3 style={{margin:50}}>Want 10 more jokes?Click the button</h3>
                {
                    this.state.displayJokes ? 
                    (<div>
                            {
                                this.state.jokes.map(JOKES => {
                                    const { id,setup,punchline } = JOKES;
                                    return(<p key={id}>{setup} <strong>{punchline}</strong></p>)
                            })}
                            <button onClick={this.toggleDisplayJokes}>Zip It!</button>
                    </div>) : (
                        <div>
                            <button onClick={this.toggleDisplayJokes}>More!</button>
                        </div>
                    )}
                    
            </div>
        )
    }
}
export default Jokes;