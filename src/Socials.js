import React, { Component } from 'react';
import PROFILES from './data/socialProfiles';

class Profile extends Component{
    render(){
        const {image, title, link} = this.props.profile;
        return(
            <div style={{display:'inline-block', margin: 10}}>
                <a href={link} style={{color:'grey'}}><img src={image} style={{width:40, height:40}} alt='profile'></img></a>
            </div>
        )
    }
};

class Profiles extends Component{
    render(){
        return(
            <div>
                <h1>Social Profiles</h1>
                <div>
                    {PROFILES.map((profiles =>{
                        return(
                            <Profile key={profiles.id} profile={profiles}/>
                        )
                    }))}
                </div>
            </div>
        )
    }
};
export default Profiles;