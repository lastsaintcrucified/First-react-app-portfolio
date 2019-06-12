import React, { Component } from 'react';
import Projects from './Projects';
import Profiles from './Socials';
import profilePic from './assets/profile.png';

class App extends Component {
    state = { displayBio : false };
    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio});
    }

    render(){
        return(
           <div>
                <img src={profilePic} alt='profile' className='profile'></img>
                <h1>Hello!</h1>
                <p>My name is <strong>MUHAMMAD TOWHIDUL ISLAM</strong></p>
                <p>My favourite language is javaScript</p>
                <p>I live in bangladesh</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I am a hard working person</p>
                            <p>I'd like to work hard for my earning</p>
                            <p>I am always gratefull to ALLAH</p>
                            <button onClick={this.toggleDisplayBio}>Showless</button>
                        </div>
                    ) : (<div>
                            <button onClick = {this.toggleDisplayBio}>Read more</button>
                        </div>)
                }
                <hr/>
                <Projects/>
                <hr/>
                <Profiles/>
                
           </div>
           
        )
    }
}

export default App;