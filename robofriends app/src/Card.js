import React from 'react';

// class Card extends React.Component {
    const Card = (robots) => {
    // render(robots) {
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img alt='robots' src={`https://robohash.org/${robots.id}?200x200`} />
            <div>
            <h2>{robots.name}</h2>
            <p>{robots.email}</p>
            </div>
            </div>
        )
    // }
}

export default Card;