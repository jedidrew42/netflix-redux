import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';

function ProfileScreen() {
    return (
        <div className="profileScreen">
         <Nav />
         <div className="profilescreen__body">
             <h1>Edit Profile</h1>
             <div className="profilescreen__info">
                 <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar"

                 />

             </div>

         </div>
            
        </div>
    )
}

export default ProfileScreen
