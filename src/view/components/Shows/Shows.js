import React from 'react';
import Show from './Show/Show';
import './Shows.css';

const Shows = ({ data }) => {
    let shows = null;
    if(data){
        shows = data.slice(0, 50).sort((a, b) => b.rating - a.rating).map(show => (
            <Show image={show.mediumImage}/>
        ))
    }
    return (
        <div className='row shows'>
            {shows}
        </div>
    )
};

export default Shows;