import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5810fd3520099ebb7c304192/1525148043894-332VS8NKW95SBRMO000L/ke17ZwdGBToddI8pDm48kMFPtRR4l3lcmzFLTP0Q7u0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2diEgG2Fe39N0vN2Vd0BDqSr9HBdNJW-Z4Kxv2md1rbPCCjLISwBs8eEdxAxTptZAUg/black-banner-noise.png?format=2500w")`,
        backgroundPosition: "center center",

        }}>

            <div className="banner__contents">
               <h1 className="banner__title">
                   Movie Name
                   </h1> 
                   <div className="banner__buttons">
                       <button className="banner__button">Play</button>
                       <button className="banner__button">My List</button>
                   </div>
                    <h1 className="banner__description">
                        Movie Description
                    </h1>
            </div>
            <div className="banner--fadeBottom"/>

            
        </header>
    )
}

export default Banner;
