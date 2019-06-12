import React, { Component } from 'react';
import PROFILES from './data/socialProfiles';

class Profile extends Component{
    render(){
        const {image, title, link} = this.props.profile;
        return(
            <div style={{display:'inline-block',width:330, margin: 10}}>
                <img src={image} style={{width:40, height:40}} alt='profile'></img><br></br>
                <a href={link} style={{color:'grey'}}><strong>{title}</strong></a>
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