import React from 'react';
import Show from './Show/Show';
import './Shows.css';

const Shows = ({ data }) => {
    let shows = null;
    if(data){
        shows = data.map(show => (
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