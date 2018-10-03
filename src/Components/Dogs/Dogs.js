import React from 'react';

import './Dogs.css';

const Dogs = props => {
    return (
        <div className='doggo'>
            <img src={props.img} alt="Doggo"/>
            <button onClick={props.handleClick}>{props.button}</button>
        </div>
    );
};

export default Dogs;