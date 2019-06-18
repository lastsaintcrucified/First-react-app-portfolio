import React, { Component } from 'react';
import PROFILES from '../data/socialProfiles';

const Profile = props =>{
        const {image, title, link} = props.profile;
        return(
            <div style={{display:'inline-block', margin: 10}}>
                <a href={link} style={{color:'grey'}}><img src={image} style={{width:40, height:40}} alt='profile'></img></a>
            </div>
        )
};

const Profiles = () =>(
            <div>
                <h1>Social Profiles</h1>
                <div>
                    {PROFILES.map((profiles =>(
                            <Profile key={profiles.id} profile={profiles}/>
                        )
                    ))}
                </div>
            </div>
)
export default Profiles;